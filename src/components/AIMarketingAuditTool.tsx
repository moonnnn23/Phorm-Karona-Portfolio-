import React, { useState } from 'react';
import { Sparkles, ArrowRight, Loader2, Cpu, CheckCircle2, AlertCircle } from 'lucide-react';

interface AuditResult {
  brandName: string;
  targetAudience: string;
  growthTactics: string[];
  suggestedChannels: string[];
  keyPerformanceIndicators: string[];
  phormInsight: string;
}

export const AIMarketingAuditTool: React.FC = () => {
  const [brandName, setBrandName] = useState('');
  const [industry, setIndustry] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [marketGoal, setMarketGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState('');

  const handleGenerateAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!brandName || !industry) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/marketing-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brandName, industry, targetAudience, marketGoal })
      });

      if (!response.ok) {
        throw new Error('Failed to generate audit strategy.');
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-audit" className="py-24 bg-[#06080F] text-white border-b border-cyan-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI GO-TO-MARKET STRATEGY ADVISOR</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase font-sans">
            AI BRAND GROWTH & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">GTM AUDIT TOOL</span>
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Test Phorm Karona’s Go-To-Market framework instantly. Enter your company or brand details below to generate a tailored 10-step launch & performance ad roadmap powered by Gemini.
          </p>
        </div>

        {/* Input Form Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <form onSubmit={handleGenerateAudit} className="lg:col-span-5 p-8 rounded-3xl bg-[#090D18] border border-cyan-500/30 space-y-5 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-cyan-300 font-mono text-xs font-bold uppercase">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Enter Brand Parameters</span>
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                Brand / Product Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Anker, Dreame, EcoFlow, CleanTech"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0E1528] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                Industry / Category *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Smart Home, EV Accessories, Wearables, Premium Audio"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0E1528] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                Target Audience (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Tech early adopters, Urban homeowners in Phnom Penh"
                value={targetAudience}
                onChange={(e) => setTargetAudience(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0E1528] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-neutral-300 uppercase tracking-wider mb-2">
                Primary Goal (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Rapid retail expansion, High ROAS Meta Ads, Mall Pop-Up"
                value={marketGoal}
                onChange={(e) => setMarketGoal(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#0E1528] border border-white/10 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !brandName || !industry}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-black font-extrabold text-xs uppercase tracking-wider hover:opacity-95 shadow-xl shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-black" />
                  <span>Synthesizing Strategy Audit...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Generate Growth Audit</span>
                </>
              )}
            </button>
          </form>

          {/* Result Box */}
          <div className="lg:col-span-7">
            {error && (
              <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2 font-mono">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {!result && !loading && (
              <div className="p-12 rounded-3xl bg-[#080C16] border border-dashed border-cyan-500/20 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase font-sans">
                  Ready for AI Growth Simulation
                </h3>
                <p className="text-xs text-neutral-400 max-w-md mx-auto font-sans leading-relaxed">
                  Fill in your brand parameters to receive Phorm Karona’s executive marketing strategy, suggested channels, key performance indicators, and GTM tactics.
                </p>
              </div>
            )}

            {result && (
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0C152A] via-[#090E1C] to-[#080C18] border border-cyan-400/50 space-y-6 shadow-2xl animate-in fade-in-50">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block">
                      EXECUTIVE GTM AUDIT
                    </span>
                    <h3 className="text-2xl font-black text-white uppercase font-sans">
                      {result.brandName} Roadmap
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                    Phorm Framework
                  </span>
                </div>

                {/* Target Persona */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
                    Target Persona Focus:
                  </span>
                  <p className="text-xs text-neutral-200 font-mono">
                    {result.targetAudience}
                  </p>
                </div>

                {/* Growth Tactics */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
                    Recommended Executive Growth Tactics:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {result.growthTactics.map((tactic, tIdx) => (
                      <div key={tIdx} className="p-3 rounded-xl bg-[#080D1A] border border-white/10 text-xs text-neutral-300 font-mono flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{tactic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Channels & KPIs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#080D1A] border border-white/10 space-y-2">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold block">
                      Prioritized Growth Channels:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {result.suggestedChannels.map((c, cIdx) => (
                        <span key={cIdx} className="px-2 py-1 rounded bg-[#0E162B] text-[11px] font-mono text-white">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#080D1A] border border-white/10 space-y-2">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold block">
                      Core KPIs to Track:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {result.keyPerformanceIndicators.map((kpi, kIdx) => (
                        <span key={kIdx} className="px-2 py-1 rounded bg-[#0E162B] text-[11px] font-mono text-emerald-400">
                          {kpi}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Phorm Insight Commentary */}
                <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 space-y-1">
                  <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest font-bold block">
                    Phorm Karona’s Strategic Insight:
                  </span>
                  <p className="text-xs text-neutral-200 leading-relaxed font-sans italic">
                    “{result.phormInsight}”
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
