"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import AlertPopup from "../components/ui/alertPopUp";
import {
  Users,
  HeartHandshake,
  GraduationCap,
  Globe,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  Send,
  Loader2
} from "lucide-react";
import { useI18n } from "@/app/providers";

interface Program {
  id: string | number;
  name: string;
  description?: string;
}

export default function VolunteerPage() {
  const { t, lang } = useI18n();

  const [formStep, setFormStep] = useState(1);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [isLoadingPrograms, setIsLoadingPrograms] = useState(true);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    language: lang === "fr" ? "French" : "English",
    motivation: "",
    program_id: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [alertConfig, setAlertConfig] = useState<{
    open: boolean;
    variant: "success" | "error";
    title: string;
    message: string;
  }>({
    open: false,
    variant: "success",
    title: "",
    message: "",
  });

  // Define roles data separately - this is static and renders immediately
  const rolesData = [
    {
      id: "field_operations",
      titleKey: "volunteer.roles.field.title",
      title: "Field Operations",
      descKey: "volunteer.roles.field.desc",
      desc: "Work directly on the ground assisting with aid distribution.",
      icon: <MapPin size={24} />,
      tags: ["On-site", "Travel"],
      colorClass: "text-[var(--lab-white)]",
      bgHover: "group-hover:bg-[var(--lab-blue)]/20",
      textHover: "group-hover:text-[var(--lab-sky)]",
      borderHover: "hover:border-[var(--lab-sky)]/50"
    },
    {
      id: "education_outreach",
      titleKey: "volunteer.roles.education.title",
      title: "Education Mentor",
      descKey: "volunteer.roles.education.desc",
      desc: "Tutor children and lead workshops for partner schools.",
      icon: <GraduationCap size={24} />,
      tags: ["Remote", "Teaching"],
      colorClass: "text-[var(--lab-yellow)]",
      bgHover: "group-hover:bg-[var(--lab-yellow)]/20",
      textHover: "group-hover:text-[var(--lab-yellow)]",
      borderHover: "hover:border-[var(--lab-yellow)]/50"
    },
    {
      id: "community_outreach",
      titleKey: "volunteer.roles.outreach.title",
      title: "Community Outreach",
      descKey: "volunteer.roles.outreach.desc",
      desc: "Help organize local events and fundraisers in your city.",
      icon: <HeartHandshake size={24} />,
      tags: ["Local", "Events"],
      colorClass: "text-[var(--lab-sky)]",
      bgHover: "group-hover:bg-[var(--lab-sky)]/20",
      textHover: "group-hover:text-[var(--lab-sky)]",
      borderHover: "hover:border-[var(--lab-sky)]/50"
    },
    {
      id: "tech_support",
      titleKey: "volunteer.roles.tech.title",
      title: "Tech & Support",
      descKey: "volunteer.roles.tech.desc",
      desc: "Use your digital skills to support global infrastructure.",
      icon: <Globe size={24} />,
      tags: ["Remote", "Coding"],
      colorClass: "text-[var(--lab-yellow)]",
      bgHover: "group-hover:bg-[var(--lab-yellow)]/20",
      textHover: "group-hover:text-[var(--lab-yellow)]",
      borderHover: "hover:border-[var(--lab-yellow)]/50"
    },
    {
      id: "medical_relief",
      titleKey: "volunteer.roles.medical.title",
      title: "Medical Team",
      descKey: "volunteer.roles.medical.desc",
      desc: "Healthcare professionals for mobile clinics.",
      icon: <CheckCircle2 size={24} />,
      tags: ["On-site", "Certified"],
      colorClass: "text-[var(--lab-sky)]",
      bgHover: "group-hover:bg-[var(--lab-sky)]/20",
      textHover: "group-hover:text-[var(--lab-sky)]",
      borderHover: "hover:border-[var(--lab-sky)]/50"
    },
    {
      id: "crisis_response",
      titleKey: "volunteer.roles.crisis.title",
      title: "Crisis Response",
      descKey: "volunteer.roles.crisis.desc",
      desc: "Rapid response team deployment during emergencies.",
      icon: <Clock size={24} />,
      tags: ["On-call", "Impact"],
      colorClass: "text-[var(--lab-white)]",
      bgHover: "group-hover:bg-[var(--lab-white)]/20",
      textHover: "group-hover:text-[var(--lab-sky)]",
      borderHover: "hover:border-[var(--lab-sky)]/50"
    }
  ];

  // Fetch programs from backend - this runs independently
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        setIsLoadingPrograms(true);
        console.log("Fetching programs from backend...");

        const response = await fetch("https://pyvotalehub-backend.onrender.com/api/ngo/programs/");

        if (response.ok) {
          const data = await response.json();
          console.log("Programs fetched:", data);
          setPrograms(data);
        } else {
          console.error("Failed to fetch programs:", response.status);
          // Use rolesData as fallback
          setPrograms(rolesData.map(role => ({
            id: role.id,
            name: role.title
          })));
        }
      } catch (error) {
        console.error("Error fetching programs:", error);
        // Use rolesData as fallback
        setPrograms(rolesData.map(role => ({
          id: role.id,
          name: role.title
        })));
      } finally {
        setIsLoadingPrograms(false);
      }
    };

    fetchPrograms();
  }, []);

  const closeAlert = () => setAlertConfig((prev) => ({ ...prev, open: false }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    if (!formData.full_name || !formData.email || !formData.phone) {
      setAlertConfig({
        open: true,
        variant: "error",
        title: "Missing Information",
        message: "Please fill in your name, email, and phone number before continuing."
      });
      return;
    }
    setFormStep(prev => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.program_id || !formData.motivation) {
      setAlertConfig({
        open: true,
        variant: "error",
        title: "Incomplete Form",
        message: "Please select a program and briefly explain your motivation."
      });
      return;
    }

    setIsLoading(true);

    // Format payload exactly as the schema requires
    const payload = {
      full_name: formData.full_name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || null,
      language: formData.language || "English",
      motivation: formData.motivation.trim() || null,
      program_id: formData.program_id
    };

    console.log("Submitting payload:", payload);

    try {
      const response = await fetch("/api/volunteers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", response.status);

      const responseText = await response.text();
      console.log("Raw response:", responseText);

      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch {
        responseData = { message: responseText };
      }

      if (!response.ok) {
        let errorMessage = "Submission failed. ";

        switch (response.status) {
          case 400:
            errorMessage = responseData?.details || "Please check your information and try again.";
            break;
          case 422:
            if (responseData?.detail) {
              const errors = responseData.detail.map((err: any) =>
                `${err.loc?.join('.')}: ${err.msg}`
              ).join(', ');
              errorMessage = `Validation failed: ${errors}`;
            } else {
              errorMessage = "Please check your input format.";
            }
            break;
          case 500:
            errorMessage = "The server encountered an error. Our team has been notified. Please try again later.";
            break;
          case 504:
            errorMessage = "The server is taking too long to respond. Please wait a moment and try again.";
            break;
          default:
            errorMessage = responseData?.error || responseData?.message || `Error ${response.status}`;
        }

        throw new Error(errorMessage);
      }

      setAlertConfig({
        open: true,
        variant: "success",
        title: "Application Received!",
        message: t("volunteer.form.alert" as any) || "Thank you for volunteering with LAB Foundation! We will review your application and contact you soon."
      });

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        language: lang === "fr" ? "French" : "English",
        motivation: "",
        program_id: ""
      });
      setFormStep(1);

    } catch (error: any) {
      console.error("Submission error:", error);

      setAlertConfig({
        open: true,
        variant: "error",
        title: "Submission Failed",
        message: error.message || "We couldn't submit your application. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = t("volunteer.hero.title" as any) || "Volunteer | LAB Foundation";
  }, [t]);

  const statsData = [
    { numberKey: "volunteer.stats.active", labelKey: "volunteer.stats.activeLabel", icon: <Users size={32} className="text-[var(--lab-white)]" /> },
    { numberKey: "volunteer.stats.projects", labelKey: "volunteer.stats.projectsLabel", icon: <CheckCircle2 size={32} className="text-[var(--lab-sky)]" /> },
    { numberKey: "volunteer.stats.countries", labelKey: "volunteer.stats.countriesLabel", icon: <Globe size={32} className="text-[var(--lab-yellow)]" /> },
  ];

  return (
    <main className="bg-[#000814] min-h-screen relative overflow-x-hidden text-white font-sans">
      <AlertPopup
        open={alertConfig.open}
        variant={alertConfig.variant}
        title={alertConfig.title}
        message={alertConfig.message}
        onClose={closeAlert}
        onContinue={closeAlert}
      />

      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--lab-blue)_0%,transparent_70%)] opacity-10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--lab-sky)_0%,transparent_70%)] opacity-10 blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop"
            alt={t("volunteer.hero.alt" as any) || "Volunteer with us"}
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/80 via-[#000814]/40 to-[#000814]" />
        </div>

        <div className="relative z-10 text-center w-[90%] md:w-[80%] mx-auto mt-20">
          <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
            {t("volunteer.hero.badge" as any) || "JOIN THE MOVEMENT"}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl leading-tight">
            {t("volunteer.hero.title1" as any) || "Make a Difference"}
            <br />
            {t("volunteer.hero.title2" as any) || "With Your Time & Skills"}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light mb-10">
            {t("volunteer.hero.subtitle" as any) || "Join our community of volunteers and help transform lives across the globe"}
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="pill" size="lg" className="min-w-[200px] justify-center" onClick={scrollToForm}>
              {t("volunteer.hero.apply" as any) || "Apply Now"}
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px] justify-center text-white border-white/20 hover:bg-white/10">
              {t("volunteer.hero.learn" as any) || "Learn More"}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative z-10 -mt-20">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statsData.map((stat, i) => (
              <Card key={i} className="p-8 flex flex-col items-center text-center bg-[#0a1128]/80 backdrop-blur-xl border-white/10 shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-4 p-4 rounded-full bg-white/5 border border-white/10">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  {t(stat.numberKey as any) || "5000+"}
                </h3>
                <p className="text-white/60">
                  {t(stat.labelKey as any) || "Active Volunteers"}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section - Now renders immediately with static data */}
      <section className="py-24 relative z-10">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t("volunteer.roles.title" as any) || "Find Your Role"}
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              {t("volunteer.roles.subtitle" as any) || "There is a place for you at LAB Foundation."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rolesData.map((role, i) => (
              <Card key={i} className={`p-8 group transition-colors duration-300 ${role.borderHover}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${role.colorClass} ${role.bgHover} ${role.textHover} transition-colors duration-300`}>
                    {role.icon}
                  </div>
                  <ArrowRight size={20} className="text-white/20 group-hover:text-white transition-colors" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${role.textHover} transition-colors`}>
                  {t(role.titleKey as any) || role.title}
                </h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  {t(role.descKey as any) || role.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply-form" className="py-24 bg-[#0a1128] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

        <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block py-2 px-5 rounded-full border border-[var(--lab-sky)]/50 text-white text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm bg-white/5">
              {t("volunteer.form.join" as any) || "Join Us"}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {t("volunteer.form.title" as any) || "Ready to Make a Difference?"}
            </h2>
            <p className="text-white/70 text-lg mb-12">
              {t("volunteer.form.subtitle" as any) || "Fill out the form to get started."}
            </p>

            <div className="space-y-8">
              {[
                { step: "01", titleKey: "volunteer.form.steps.apply", descKey: "volunteer.form.steps.applyDesc" },
                { step: "02", titleKey: "volunteer.form.steps.interview", descKey: "volunteer.form.steps.interviewDesc" },
                { step: "03", titleKey: "volunteer.form.steps.onboarding", descKey: "volunteer.form.steps.onboardingDesc" },
                { step: "04", titleKey: "volunteer.form.steps.impact", descKey: "volunteer.form.steps.impactDesc" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="text-2xl font-bold text-[var(--lab-sky)] opacity-70">{item.step}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      {t(item.titleKey as any)}
                    </h4>
                    <p className="text-white/50 text-sm">
                      {t(item.descKey as any)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-8 md:p-12 border-[var(--lab-blue)]/20 shadow-2xl relative bg-[#000814]/80">
            <h3 className="text-2xl font-bold mb-8 text-center">
              {t("volunteer.form.cardTitle" as any) || "Volunteer Application"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {formStep === 1 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 ml-1">
                      {t("volunteer.form.nameLabel" as any) || "FULL NAME"}
                    </label>
                    <input
                      type="text"
                      name="full_name"
                      required
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder={t("volunteer.form.namePlaceholder" as any) || "John Doe"}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--lab-blue)] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 ml-1">
                      {t("volunteer.form.emailLabel" as any) || "EMAIL ADDRESS"}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("volunteer.form.emailPlaceholder" as any) || "john@example.com"}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--lab-blue)] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 ml-1">PHONE NUMBER</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 890"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--lab-blue)] transition-colors"
                    />
                  </div>

                  <Button
                    type="button"
                    variant="pill"
                    size="lg"
                    className="w-full justify-center mt-4"
                    onClick={handleNextStep}
                  >
                    {t("volunteer.form.next" as any) || "Next Step"}
                  </Button>
                </div>
              )}

              {formStep === 2 && (
                <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 ml-1">
                      {t("volunteer.form.interestLabel" as any) || "AREA OF INTEREST"}
                    </label>
                    <select
                      name="program_id"
                      required
                      value={formData.program_id}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--lab-blue)] appearance-none"
                    >
                      <option className="bg-[#000814]" value="">
                        {t("volunteer.form.interestPlaceholder" as any) || "Select an area of interest"}
                      </option>
                      {/* Use programs from API if available, otherwise use rolesData */}
                      {(programs.length > 0 ? programs : rolesData).map((item: any) => (
                        <option key={item.id} className="bg-[#000814]" value={item.id}>
                          {item.name || item.title}
                        </option>
                      ))}
                    </select>
                    {isLoadingPrograms && programs.length === 0 && (
                      <p className="text-xs text-[var(--lab-sky)] mt-1">Loading programs from server...</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/60 ml-1">MOTIVATION</label>
                    <textarea
                      name="motivation"
                      required
                      rows={3}
                      value={formData.motivation}
                      onChange={handleChange}
                      placeholder="Why do you want to join the LAB Foundation?"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--lab-blue)] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex gap-4 mt-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="lg"
                      className="flex-1 justify-center border-white/20 text-white"
                      onClick={() => setFormStep(1)}
                    >
                      {t("volunteer.form.back" as any) || "Back"}
                    </Button>
                    <Button
                      type="submit"
                      variant="pill"
                      size="lg"
                      className="flex-[2] justify-center"
                      icon={isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                      disabled={isLoading}
                    >
                      {isLoading ? "Submitting..." : (t("volunteer.form.submit" as any) || "Submit Application")}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t("volunteer.testimonials.title" as any) || "Why We Volunteer"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-white/5 bg-gradient-to-br from-[#0a1128] to-transparent">
              <p className="text-lg text-white/80 italic mb-6">
                {t("volunteer.testimonials.elena.quote" as any) || "Volunteering with LAB gave me a sense of purpose. Seeing the impact in Turkana was life-changing."}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden relative">
                  <Image
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt={t("volunteer.testimonials.elena.name" as any) || "Elena Rodriguez"}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{t("volunteer.testimonials.elena.name" as any) || "Elena Rodriguez"}</h4>
                  <p className="text-xs text-[var(--lab-sky)]">{t("volunteer.testimonials.elena.role" as any) || "Education Mentor"}</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-white/5 bg-gradient-to-bl from-[#0a1128] to-transparent">
              <p className="text-lg text-white/80 italic mb-6">
                {t("volunteer.testimonials.david.quote" as any) || "I used my coding skills to help streamline their donation platform. It's amazing to see the result."}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden relative">
                  <Image
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt={t("volunteer.testimonials.david.name" as any) || "David Kim"}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{t("volunteer.testimonials.david.name" as any) || "David Kim"}</h4>
                  <p className="text-xs text-[var(--lab-sky)]">{t("volunteer.testimonials.david.role" as any) || "Tech Volunteer"}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}