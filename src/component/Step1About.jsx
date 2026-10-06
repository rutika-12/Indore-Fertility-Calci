
export default function Step1About({ data, onChange, onNext, onBack }) {
  const heightM = data.height / 100;
  const bmi = heightM > 0 ? (data.weight / (heightM * heightM)).toFixed(1) : 0;

  return (
    <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-8">
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <div>
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
            Step 1 of 6
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">About You</h2>
        </div>
        <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-3.5 py-1.5 rounded-full">
          Personalisation 28%
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Age
          </label>
          <div className="flex items-center bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 focus-within:border-teal-600 focus-within:bg-white transition-all shadow-sm">
            <input
              type="number"
              value={data.age}
              onChange={(e) => onChange("age", e.target.value)}
              className="w-full bg-transparent text-slate-900 font-bold outline-none text-xl"
            />
            <span className="text-xs font-semibold text-slate-400">years</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Height
          </label>
          <div className="flex items-center bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 focus-within:border-teal-600 focus-within:bg-white transition-all shadow-sm">
            <input
              type="number"
              value={data.height}
              onChange={(e) => onChange("height", e.target.value)}
              className="w-full bg-transparent text-slate-900 font-bold outline-none text-xl"
            />
            <span className="text-xs font-semibold text-slate-400">cm</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Weight
          </label>
          <div className="flex items-center bg-slate-50 border border-slate-200/80 rounded-2xl px-5 py-3.5 focus-within:border-teal-600 focus-within:bg-white transition-all shadow-sm">
            <input
              type="number"
              value={data.weight}
              onChange={(e) => onChange("weight", e.target.value)}
              className="w-full bg-transparent text-slate-900 font-bold outline-none text-xl"
            />
            <span className="text-xs font-semibold text-slate-400">kg</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-50 to-emerald-50/50 border border-teal-100 p-6 rounded-2xl flex items-center justify-between shadow-sm">
        <div>
          <p className="text-sm font-bold text-teal-900">Your BMI: {bmi}</p>
          <p className="text-xs text-slate-600 mt-0.5">
            Healthy range. The CDC model uses BMI as a continuous variable.
          </p>
        </div>
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-teal-700 font-extrabold shadow-md border border-teal-100 text-lg">
          {bmi}
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
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
