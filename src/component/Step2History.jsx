
export default function Step2History({ data, onChange, onNext, onBack }) {
  return (
    <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-8">
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <div>
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
            Step 2 of 6
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Reproductive History
          </h2>
        </div>
        <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-3.5 py-1.5 rounded-full">
          Personalisation 58%
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            How Many IVF Attempts Have You Had Before?
          </label>
          <select
            value={data.ivfAttempts}
            onChange={(e) => onChange("ivfAttempts", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm font-semibold text-slate-800 outline-none focus:border-teal-600 focus:bg-white transition-all shadow-sm"
          >
            <option value="">Select option...</option>
            <option value="0">None</option>
            <option value="1">1</option>
            <option value="2">2 or more</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            How Many Times Have You Been Pregnant?
          </label>
          <select
            value={data.pregnancies}
            onChange={(e) => onChange("pregnancies", e.target.value)}
            className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm font-semibold text-slate-800 outline-none focus:border-teal-600 focus:bg-white transition-all shadow-sm"
          >
            <option value="">Select option...</option>
            <option value="None">None</option>
            <option value="Once">Once</option>
            <option value="Twice or more">Twice or more</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          How Many Previous Live Births Have You Had?
        </label>
        <select
          value={data.liveBirths}
          onChange={(e) => onChange("liveBirths", e.target.value)}
          className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 text-sm font-semibold text-slate-800 outline-none focus:border-teal-600 focus:bg-white transition-all shadow-sm"
        >
          <option value="">Select option...</option>
          <option value="Zero">Zero</option>
          <option value="One">One</option>
          <option value="Two or more">Two or more</option>
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
