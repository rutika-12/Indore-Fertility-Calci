
export default function Step6Lifestyle({ data, onChange, onNext, onBack }) {
  return (
    <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-8">
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <div>
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
            Step 6 of 6
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Lifestyle and General Health
          </h2>
        </div>
        <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-3.5 py-1.5 rounded-full">
          Personalisation 95%
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Smoking Status
          </label>
          <select
            value={data.smoking}
            onChange={(e) => onChange("smoking", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm font-semibold text-slate-800 outline-none focus:border-teal-600 focus:bg-white transition-all shadow-sm"
          >
            <option value="">Select option...</option>
            <option value="Never smoked">Never smoked</option>
            <option value="Current smoker">Current smoker</option>
            <option value="Former smoker">Former smoker</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Alcohol Intake
          </label>
          <select
            value={data.alcohol}
            onChange={(e) => onChange("alcohol", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm font-semibold text-slate-800 outline-none focus:border-teal-600 focus:bg-white transition-all shadow-sm"
          >
            <option value="">Select option...</option>
            <option value="None">None</option>
            <option value="Occasional">Occasional</option>
            <option value="Regular">Regular</option>
          </select>
        </div>
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
          My Estimate &rarr;
        </button>
      </div>
    </div>
  );
}
