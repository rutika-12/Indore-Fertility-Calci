
export default function LandingPage({ onStart }) {
  return (
    <div className="bg-gradient-to-br from-white via-white to-teal-50/30 p-10 md:p-14 rounded-3xl shadow-2xl shadow-teal-900/5 border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6">
          <span className="bg-teal-100/80 text-teal-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Clinical Prediction Model
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            IVF Success <span className="text-teal-600">Calculator</span>
          </h1>
          <p className="text-slate-600 text-base leading-relaxed">
            Estimate your chance of having a baby with IVF. The more relevant
            information you provide, the more personalised your assessment
            becomes.
          </p>
          <button
            onClick={onStart}
            className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm rounded-2xl shadow-lg shadow-teal-600/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-3"
          >
            Start Assessment &rarr;
          </button>
        </div>

        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-slate-100 shadow-lg space-y-4">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest border-b border-slate-100 pb-3">
            Before you start
          </h3>
          <ul className="space-y-3.5 text-xs text-slate-600">
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                &#10003;
              </span>
              <span>
                Core live-birth estimate uses published equations from the U.S.
                CDC.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                &#10003;
              </span>
              <span>
                AMH and AFC add ovarian-response context, not an artificial
                live-birth penalty.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                &#10003;
              </span>
              <span>
                Lifestyle factors are shown separately as modifiable factors.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                &#10003;
              </span>
              <span>No name, phone number or email is required.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-slate-100 text-[11px] text-slate-400 leading-relaxed text-center font-medium">
        This calculator is for education and counselling support. It does not
        diagnose infertility or replace an individual consultation.
      </div>
    </div>
  );
}
