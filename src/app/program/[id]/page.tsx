"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import {
    ArrowUpRight,
    MapPin,
    Users,
    Calendar,
    Globe,
    Droplets,
    BookOpen,
    Loader2
} from "lucide-react";
import { useI18n } from "@/app/providers";


interface Program {
    id: string;
    title: string;
    description: string;
    duration_weeks: number;
    active: boolean;
    // UI Fallback fields
    category: string;
    image: string;
    location: string;
    beneficiaries: string;
}

export default function ProgramsPage() {
    const { t, lang } = useI18n();
    const [activeFilter, setActiveFilter] = useState("all");

    const [programs, setPrograms] = useState<Program[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        document.title = t("programs.hero.title" as any) || "Our Programs | LAB Foundation";
    }, [t]);

    // =========================================================================
    // BACKEND INTEGRATION: GET /api/ngo/programs/
    // =========================================================================
    useEffect(() => {
        const fetchPrograms = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://pyvotalehub-backend.onrender.com/api/ngo/programs/?lang=${lang}&limit=100`, {
                    cache: 'no-store'
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch programs");
                }

                const data = await response.json();

                // Map backend data to fit our beautiful UI schema
                const mappedPrograms = data.map((prog: any, index: number) => {
                    // Assign alternating categories/images since they aren't in the schema yet
                    const categoriesList = ["education", "health", "relief"];
                    const cat = categoriesList[index % categoriesList.length];
                    const images = [
                        "https://images.unsplash.com/photo-1509099836639-18ba17952166?q=80&w=800&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                    ];

                    return {
                        id: prog.id,
                        title: prog.title,
                        description: prog.description,
                        duration_weeks: prog.duration_weeks,
                        active: prog.active,
                        category: cat,
                        image: images[index % images.length],
                        location: "Global Impact",
                        beneficiaries: "Community",
                    };
                });

                setPrograms(mappedPrograms);
            } catch (err: any) {
                console.error("Programs Fetch Error:", err);
                setError("Unable to load programs at this time. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchPrograms();
    }, [lang]);
    // =========================================================================

    const categories = [
        { id: "all", label: t("programs.filter.all" as any) || "All Programs" },
        { id: "education", label: t("programs.filter.education" as any) || "Education" },
        { id: "health", label: t("programs.filter.health" as any) || "Health & Water" },
        { id: "relief", label: t("programs.filter.relief" as any) || "Crisis Relief" }
    ];

    const filteredPrograms = activeFilter === "all"
        ? programs
        : programs.filter(p => p.category === activeFilter);

    // Helper function to assign icons and colors based on category
    const getCategoryStyles = (category: string) => {
        switch (category) {
            case "education": return { icon: <BookOpen size={16} />, color: "text-[var(--lab-yellow)]", bg: "bg-[var(--lab-yellow)]/10 border-[var(--lab-yellow)]/30" };
            case "health": return { icon: <Droplets size={16} />, color: "text-[var(--lab-sky)]", bg: "bg-[var(--lab-sky)]/10 border-[var(--lab-sky)]/30" };
            default: return { icon: <Globe size={16} />, color: "text-red-400", bg: "bg-red-400/10 border-red-400/30" };
        }
    };

    return (
        <main className="bg-[#000814] min-h-screen relative overflow-x-hidden text-white font-sans">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--lab-blue)_0%,transparent_70%)] opacity-10 blur-[120px] pointer-events-none" />
            <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--lab-sky)_0%,transparent_70%)] opacity-10 blur-[120px] pointer-events-none" />

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/community.jpg"
                        alt={t("programs.hero.alt" as any) || "LAB Foundation Programs"}
                        fill
                        className="object-cover opacity-50"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/90 via-[#000814]/60 to-[#000814]" />
                </div>

                <div className="relative z-10 text-center w-[90%] md:w-[80%] mx-auto mt-20">
                    <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
                        {t("programs.hero.badge" as any) || "Our Impact"}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight">
                        {t("programs.hero.title" as any) || "Programs That Matter"}
                    </h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                        {t("programs.hero.subtitle" as any) || "Explore our ongoing and completed initiatives designed to uplift communities globally."}
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 relative z-10">
                <div className="w-[90%] md:w-[80%] mx-auto">

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveFilter(cat.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${activeFilter === cat.id
                                        ? "bg-[var(--lab-blue)] border-[var(--lab-blue)] text-white shadow-[0_0_20px_rgba(var(--lab-blue-rgb),0.4)]"
                                        : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/30"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-20 text-white/50">
                            <Loader2 size={40} className="animate-spin mb-4 text-[var(--lab-sky)]" />
                            <p>Loading programs...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-20 text-red-400">
                            <p>{error}</p>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredPrograms.map((program) => {
                                    const styles = getCategoryStyles(program.category);

                                    return (
                                        <Link href={`/pages/programs/${program.id}`} key={program.id} className="group">
                                            <Card className="p-0 overflow-hidden flex flex-col h-full border-white/10 bg-[#0a1128]/80 backdrop-blur-xl hover:border-[var(--lab-sky)]/30 hover:-translate-y-2 transition-all duration-500">

                                                <div className="relative h-64 w-full overflow-hidden">
                                                    <Image
                                                        src={program.image}
                                                        alt={program.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                        unoptimized
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] to-transparent opacity-80" />

                                                    <div className="absolute top-4 left-4">
                                                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${styles.bg} ${styles.color}`}>
                                                            {styles.icon}
                                                            {program.category}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="p-8 flex flex-col flex-grow">
                                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--lab-sky)] transition-colors line-clamp-2">
                                                        {program.title}
                                                    </h3>

                                                    <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                                        {program.description}
                                                    </p>

                                                    <div className="space-y-3 pt-6 border-t border-white/10">
                                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                                            <MapPin size={16} className="text-[var(--lab-sky)]" />
                                                            <span>{program.location}</span>
                                                        </div>
                                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                                            <Calendar size={16} className="text-[var(--lab-yellow)]" />
                                                            <span>{program.duration_weeks} Weeks</span>
                                                        </div>
                                                        <div className="flex items-center gap-3 text-sm text-white/80">
                                                            <Users size={16} className="text-[var(--lab-blue)]" />
                                                            <span className={program.active ? "text-emerald-400" : "text-white/60"}>
                                                                {program.active ? "Active" : "Completed"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </Link>
                                    );
                                })}
                            </div>

                            {filteredPrograms.length === 0 && (
                                <div className="text-center py-20">
                                    <p className="text-white/50 text-lg">No programs found for this category at the moment.</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            <section className="py-16 bg-[#010c1e] border-y border-white/5">
                <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <h4 className="text-4xl font-bold text-white mb-2">45+</h4>
                        <p className="text-white/50 text-sm uppercase tracking-wider">Programs Completed</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-bold text-[var(--lab-sky)] mb-2">12</h4>
                        <p className="text-white/50 text-sm uppercase tracking-wider">Countries Reached</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-bold text-[var(--lab-yellow)] mb-2">100k+</h4>
                        <p className="text-white/50 text-sm uppercase tracking-wider">Lives Impacted</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-bold text-[var(--lab-blue)] mb-2">100%</h4>
                        <p className="text-white/50 text-sm uppercase tracking-wider">Commitment</p>
                    </div>
                </div>
            </section>

            <section className="py-32 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--lab-blue)]/10 to-[var(--lab-sky)]/10 pointer-events-none"></div>

                <div className="w-[90%] md:w-[80%] mx-auto relative z-10">
                    <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
                        {t("programs.cta.badge" as any) || "Get Involved"}
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold mb-8">
                        {t("programs.cta.title" as any) || "Help Us Build the Future"}
                    </h2>
                    <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
                        {t("programs.cta.subtitle" as any) || "Your support funds directly power these programs. Join us in making a tangible difference today."}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/pages/donate">
                            <Button variant="pill" size="lg" className="min-w-[200px] justify-center bg-[var(--lab-blue)] hover:bg-[var(--lab-blue)]/90" icon={<ArrowUpRight size={20} />}>
                                {t("programs.cta.donateBtn" as any) || "Fund a Program"}
                            </Button>
                        </Link>
                        <Link href="/pages/volunteer">
                            <Button variant="outline" size="lg" className="min-w-[200px] justify-center border-white/20 text-white hover:bg-white/10">
                                {t("programs.cta.volunteerBtn" as any) || "Volunteer With Us"}
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}