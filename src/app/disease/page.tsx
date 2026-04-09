"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Upload,
    ScanSearch,
    Microscope,
    AlertTriangle,
    CheckCircle2,
    Stethoscope,
    X,
    Leaf,
    Sparkles
} from "lucide-react";

export default function DiseasePage() {
    const [image, setImage] = useState<string | null>(null);
    const [symptom, setSymptom] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<any>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleAnalyze = () => {
        if (!image && !symptom) return;
        setLoading(true);
        setResult(null);

        // Simulated AI response
        setTimeout(() => {
            setResult({
                disease: "Leaf Blight",
                confidence: "92%",
                treatment:
                    "Apply copper-based fungicide and remove affected lower leaves. Ensure proper spacing between plants to improve airflow and reduce moisture retention.",
                severity: "Moderate",
            });
            setLoading(false);
        }, 2500);
    };

    const clearData = () => {
        setImage(null);
        setSymptom("");
        setResult(null);
    };

    return (
        <main className="relative min-h-screen bg-white overflow-hidden py-24 px-6">

            {/* --- Background Parallax Accents --- */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-[10%] left-[5%] text-neutral-400/10">
                    <Leaf size={300} strokeWidth={0.5} />
                </div>
                <div className="absolute bottom-[10%] right-[5%] text-green-primary/5">
                    <Leaf size={400} strokeWidth={0.5} />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-nav-bg/30 rounded-full blur-[140px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2"
                    >
                        <Sparkles size={16} className="text-green-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-400">
                            Advanced Diagnostics
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display text-neutral-900 leading-tight"
                    >
                        AI Disease <span className="italic text-green-primary">Detection</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-500 max-w-2xl mx-auto font-sans text-lg"
                    >
                        Upload a high-resolution image of your crop's leaves or describe symptoms for an instant laboratory-grade analysis.
                    </motion.p>
                </div>

                {/* Main Interface Grid */}
                <div className="grid lg:grid-cols-12 gap-8 items-start">

                    {/* LEFT: Diagnostic Inputs (7 Columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-neutral-100 p-8 shadow-2xl shadow-green-dark/5 space-y-8">

                            {/* Image Upload Area */}
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 px-2">
                                    Visual Evidence
                                </label>
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`relative group cursor-pointer border-2 border-dashed rounded-[2rem] transition-all duration-500 flex flex-col items-center justify-center overflow-hidden
                    ${image ? 'border-green-primary aspect-video' : 'border-neutral-200 py-16 hover:border-green-primary bg-neutral-50/50'}`}
                                >
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        hidden
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />

                                    {image ? (
                                        <>
                                            <img src={image} alt="Preview" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setImage(null); }}
                                                    className="bg-white p-3 rounded-full text-red-500 shadow-xl scale-0 group-hover:scale-100 transition-transform"
                                                >
                                                    <X size={20} />
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="text-center space-y-4 px-6">
                                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-lg text-green-primary group-hover:scale-110 transition-transform">
                                                <Upload size={28} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-neutral-800">Drop image here</p>
                                                <p className="text-sm text-neutral-400">Supports JPG, PNG up to 10MB</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Symptom Text Input */}
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-neutral-400 px-2">
                                    Symptomatic Description
                                </label>
                                <textarea
                                    value={symptom}
                                    onChange={(e) => setSymptom(e.target.value)}
                                    placeholder="Describe leaf color, spot patterns, or growth anomalies..."
                                    className="w-full bg-neutral-50/50 border border-neutral-100 rounded-[1.5rem] p-6 h-32 focus:outline-none focus:ring-2 focus:ring-green-primary/20 transition-all font-sans text-neutral-700 resize-none"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <button
                                    onClick={handleAnalyze}
                                    disabled={loading || (!image && !symptom)}
                                    className="flex-grow btn btn-primary !py-5 flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {loading ? 'Analyzing Data...' : 'Start AI Diagnosis'}
                                    <ScanSearch size={20} />
                                </button>
                                {(image || symptom) && (
                                    <button
                                        onClick={clearData}
                                        className="p-5 rounded-2xl bg-neutral-100 text-neutral-500 hover:bg-red-50 hover:text-red-500 transition-all"
                                    >
                                        <X size={20} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Lab Results (5 Columns) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <AnimatePresence mode="wait">
                            {loading ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    className="bg-green-dark rounded-[2.5rem] p-12 text-center space-y-8 shadow-2xl relative overflow-hidden h-[600px] flex flex-col items-center justify-center"
                                >
                                    <div className="relative">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            className="w-32 h-32 border-t-2 border-r-2 border-green-primary rounded-full"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center text-green-primary">
                                            <Microscope size={40} className="animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-display italic text-white">Scanning Tissue...</h3>
                                        <p className="text-white/50 font-sans text-sm tracking-widest uppercase">AI Pattern Recognition Active</p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 2.5 }}
                                            className="h-full bg-green-primary shadow-[0_0_20px_#22C55E]"
                                        />
                                    </div>
                                </motion.div>
                            ) : result ? (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-6"
                                >
                                    <div className="bg-white rounded-[2.5rem] border border-neutral-100 p-8 shadow-2xl space-y-6">
                                        <div className="flex items-center justify-between border-b border-neutral-50 pb-6">
                                            <h2 className="text-2xl font-display font-bold">Diagnostic Report</h2>
                                            <div className="bg-red-50 text-red-500 p-2 px-4 rounded-full flex items-center gap-2">
                                                <AlertTriangle size={14} />
                                                <span className="text-[10px] font-black uppercase tracking-widest">{result.severity} Risk</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-red-50/50 p-6 rounded-3xl border border-red-100/50">
                                                <p className="text-[10px] font-black uppercase text-neutral-400 mb-1 tracking-widest">Disease Identified</p>
                                                <h3 className="text-xl font-bold text-red-600 leading-tight">{result.disease}</h3>
                                            </div>
                                            <div className="bg-green-50/50 p-6 rounded-3xl border border-green-100/50">
                                                <p className="text-[10px] font-black uppercase text-neutral-400 mb-1 tracking-widest">Confidence Score</p>
                                                <h3 className="text-xl font-bold text-green-primary">{result.confidence}</h3>
                                            </div>
                                        </div>

                                        <div className="bg-nav-bg/20 p-8 rounded-[2rem] border border-neutral-100 space-y-4">
                                            <div className="flex items-center gap-3 text-green-primary">
                                                <Stethoscope size={20} />
                                                <h4 className="font-bold text-sm uppercase tracking-widest">Treatment Protocol</h4>
                                            </div>
                                            <p className="text-neutral-600 text-sm leading-relaxed font-sans">
                                                {result.treatment}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl">
                                            <CheckCircle2 className="text-green-primary" size={18} />
                                            <p className="text-[10px] font-black uppercase tracking-widest text-green-dark">Analysis Verified by SproutNova AI</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="bg-neutral-50 rounded-[2.5rem] border-2 border-dashed border-neutral-200 p-12 text-center h-[500px] flex flex-col items-center justify-center space-y-4 grayscale opacity-40">
                                    <ScanSearch size={64} className="text-neutral-300" />
                                    <p className="font-display italic text-2xl text-neutral-400">Ready for Analysis</p>
                                    <p className="text-sm max-w-[200px] mx-auto text-neutral-400">Please provide leaf imagery or symptoms on the left.</p>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </main>
    );
}