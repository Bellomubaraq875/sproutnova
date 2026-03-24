"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import {
  CreditCard,
  Package,
  CheckCircle2,
  Apple,
  Droplets,
  Backpack,
  Loader2
} from "lucide-react";
import { useI18n } from "@/app/providers";

export default function DonatePage() {
  const { t } = useI18n();

  // Donation states
  const [donationType, setDonationType] = useState<"money" | "material">("money");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(1000);
  const [customAmountValue, setCustomAmountValue] = useState("");

  // Form states
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");

  // Loading & Response states
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const presetAmounts = [500, 1000, 5000, 10000, "custom"];

  const handleAmountSelect = (amount: number | "custom") => {
    setSelectedAmount(amount);
    if (amount !== "custom") setCustomAmountValue("");
  };

  const getAmount = () => {
    return selectedAmount === "custom" ?
      parseFloat(customAmountValue) || 0 :
      selectedAmount as number;
  };

  const initializeDonation = async () => {
    if (!donorName.trim() || !donorEmail.trim()) {
      alert("Please enter your full name and email address.");
      return;
    }

    const amount = getAmount();

    if (amount <= 0) {
      alert("Please select or enter a valid amount.");
      return;
    }

    setIsLoading(true);
    setIsSuccess(false);

    try {
      const response = await fetch("https://pyvotalehub-backend.onrender.com/api/ngo/donations/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          donor_name: donorName.trim(),
          donor_email: donorEmail.trim(),
          amount: Math.floor(amount),
          currency: "NGN"
        }),
      });

      const data = await response.json();

      if (response.status === 422) {
        alert("Validation error. Please check your input fields.");
        setIsLoading(false);
        return;
      }

      if (!response.ok) {
        throw new Error(data.message || data.detail || "Failed to initialize donation");
      }

      if (data && data.authorization_url) {
        setIsSuccess(true);
        window.location.href = data.authorization_url;
      } else {
        throw new Error("Authorization URL missing from response.");
      }

    } catch (error: any) {
      alert(error.message || "Failed to connect to the payment server. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    document.title = t("donate.hero.title" as any) || "Donate | LAB Foundation";
  }, [t]);

  return (
    <main className="bg-[#000814] min-h-screen relative overflow-x-hidden text-white font-sans">

      {/* --- NEW SPIRAL STROKE BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <svg className="w-full h-full opacity-30" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <defs>
            <linearGradient id="spiral-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--lab-blue)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--lab-sky)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="spiral-grad-2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="var(--lab-yellow)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--lab-blue)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Top Left Corner Spiral */}
          <g transform="translate(-100, -100) scale(1.5)">
            <path
              d="M500,500 C500,200 200,200 200,500 C200,700 400,800 600,600 C800,400 600,100 300,200 C0,300 100,700 500,900"
              fill="none"
              stroke="url(#spiral-grad-1)"
              strokeWidth="1"
              strokeDasharray="10 5"
              className="animate-pulse-slow"
            />
            <path
              d="M500,500 C500,250 250,250 250,500 C250,650 400,750 550,600 C700,450 550,200 350,250"
              fill="none"
              stroke="var(--lab-sky)"
              strokeWidth="0.5"
              strokeOpacity="0.4"
            />
          </g>

          {/* Bottom Right Corner Spiral */}
          <g transform="translate(600, 600) scale(1.2)">
            <path
              d="M0,500 C0,200 300,200 300,500 C300,700 100,800 -100,600 C-300,400 -100,100 200,200 C500,300 400,700 0,900"
              fill="none"
              stroke="url(#spiral-grad-2)"
              strokeWidth="1.5"
              strokeDasharray="15 10"
              className="animate-spin-slow-rotate"
              style={{ transformOrigin: 'center' }}
            />
          </g>
        </svg>
      </div>

      <style jsx>{`
        @keyframes spin-slow-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; stroke-width: 1; }
          50% { opacity: 0.6; stroke-width: 1.5; }
        }
        .animate-spin-slow-rotate {
          animation: spin-slow-rotate 120s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
      {/* --- END SPIRAL STROKE BACKGROUND --- */}

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 text-center z-10 min-h-[50vh] flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop"
            alt={t("donate.hero.alt" as any) || "Donation"}
            fill
            priority
            sizes="100vw"
            className="opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/90 via-[#000814]/70 to-[#000814]" />
        </div>

        <div className="w-[90%] md:w-[80%] mx-auto relative z-10">
          <span className="inline-block py-2 px-6 rounded-full border border-[var(--lab-yellow)]/30 text-[var(--lab-yellow)] text-sm font-bold uppercase tracking-wider mb-6 bg-[var(--lab-yellow)]/10 backdrop-blur-sm">
            {t("donate.hero.badge" as any)}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            {t("donate.hero.title" as any)}
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            {t("donate.hero.subtitle" as any)}
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12 relative z-20">
        <div className="w-[95%] md:w-[60%] lg:w-[50%] mx-auto">
          <Card className="overflow-hidden border-[var(--lab-blue)]/30 shadow-[0_0_50px_rgba(var(--lab-blue-rgb),0.2)] bg-[#0a1128]/95 backdrop-blur-xl">
            <div className="flex border-b border-white/10">
              <button
                onClick={() => setDonationType("money")}
                className={`flex-1 py-6 font-bold text-lg flex items-center justify-center gap-2 transition-all ${donationType === "money" ? "bg-[var(--lab-blue)]/20 text-white border-b-2 border-[var(--lab-blue)]" : "text-white/50 hover:text-white hover:bg-white/5"}`}
              >
                <CreditCard size={20} />
                {t("donate.tabs.money" as any)}
              </button>
            </div>

            <div className="p-8 md:p-10">
              {donationType === "money" && (
                <div className="space-y-8 animate-in fade-in slide-in-from-left-4">
                  <div className="space-y-4">
                    <label className="block text-xs font-bold text-white/60 tracking-wider uppercase">
                      {t("donate.money.donorInfo" as any) || "DONOR INFORMATION"}
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder={t("donate.money.namePlaceholder" as any) || "Full Name"}
                        value={donorName}
                        onChange={(e) => setDonorName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--lab-blue)] focus:ring-2 focus:ring-[var(--lab-blue)]/50 transition-colors"
                      />
                      <input
                        type="email"
                        placeholder={t("donate.money.emailPlaceholder" as any) || "Email Address"}
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--lab-blue)] focus:ring-2 focus:ring-[var(--lab-blue)]/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/60 tracking-wider mb-4 uppercase">
                      {t("donate.money.amountLabel" as any) || "SELECT AMOUNT"}
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {presetAmounts.map((item) => (
                        <button
                          key={item}
                          onClick={() => handleAmountSelect(item as number | "custom")}
                          className={`py-4 rounded-xl border font-bold text-sm md:text-base transition-all ${selectedAmount === item
                            ? "bg-[var(--lab-blue)] border-[var(--lab-blue)] text-white shadow-lg scale-105"
                            : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
                            }`}
                        >
                          {item === "custom" ? (t("donate.money.custom" as any) || "Custom") : `₦${item.toLocaleString()}`}
                        </button>
                      ))}
                    </div>

                    {selectedAmount === "custom" && (
                      <div className="mt-4 relative animate-in fade-in slide-in-from-top-2">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-lg font-medium">₦</span>
                        <input
                          type="number"
                          placeholder={t("donate.money.customPlaceholder" as any) || "Enter custom amount"}
                          value={customAmountValue}
                          onChange={(e) => setCustomAmountValue(e.target.value)}
                          className="w-full bg-white/5 border border-[var(--lab-blue)] rounded-xl pl-10 pr-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-[var(--lab-blue)]/50 transition-all"
                        />
                      </div>
                    )}
                  </div>

                  <Button
                    variant="pill"
                    size="lg"
                    className="w-full justify-center bg-[var(--lab-blue)] hover:bg-[var(--lab-blue)]/90 text-white shadow-lg"
                    onClick={initializeDonation}
                    disabled={isLoading || !donorName || !donorEmail || getAmount() <= 0}
                  >
                    {isLoading ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...</>
                    ) : (
                      `Donate ₦${getAmount().toLocaleString()}`
                    )}
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 relative z-10">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t("donate.impact.title" as any)}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { amountKey: "donate.impact.amount25", impactKey: "donate.impact.meals", icon: <Apple size={32} />, color: "text-red-400", border: "border-red-500/30" },
              { amountKey: "donate.impact.amount50", impactKey: "donate.impact.water", icon: <Droplets size={32} />, color: "text-[var(--lab-sky)]", border: "border-[var(--lab-blue)]/30" },
              { amountKey: "donate.impact.amount100", impactKey: "donate.impact.school", icon: <Backpack size={32} />, color: "text-[var(--lab-yellow)]", border: "border-[var(--lab-yellow)]/30" },
            ].map((item, i) => (
              <Card key={i} className={`p-8 text-center flex flex-col items-center gap-4 group hover:-translate-y-2 transition-all ${item.border} bg-[#0a1128]/40 backdrop-blur-sm`}>
                <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mt-5 ${item.color} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-4xl font-bold text-white">{t(item.amountKey as any)}</h3>
                <p className="text-white/70">{t(item.impactKey as any)}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}