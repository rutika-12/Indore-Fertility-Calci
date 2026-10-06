
export default function Step5Sperm({ data, onChange, onNext, onBack }) {
  return (
    <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-8">
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <div>
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
            Step 5 of 6
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Sperm Source and Male Factor
          </h2>
        </div>
        <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-3.5 py-1.5 rounded-full">
          Personalisation 88%
        </span>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          Has a Semen Analysis Been Performed?
        </label>
        <select
          value={data.semenAnalysis}
          onChange={(e) => onChange("semenAnalysis", e.target.value)}
          className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm font-semibold text-slate-800 outline-none focus:border-teal-600 focus:bg-white transition-all shadow-sm"
        >
          <option value="">Select option...</option>
          <option value="Yes - reported normal">Yes - reported normal</option>
          <option value="Yes - abnormal">Yes - abnormal</option>
          <option value="Not performed">Not performed</option>
        </select>
      </div>

      <div className="flex justify-between pt-6 border-t border-slate-100">
        <button
          onClick={onBack}
          className="px-7 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-2xl transition-all"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold uppercase tracking-wider rounded-2xl shadow-lg shadow-teal-600/30 transition-all"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
