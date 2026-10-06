
export default function Step3Factors({ data, onChange, onNext, onBack }) {
  const factorsList = [
    "Tubal Factor",
    "Male Factor",
    "Endometriosis",
    "PCOS / Ovulation",
    "Low Ovarian Reserve",
    "Uterine Factor",
    "Other Diagnosis",
    "Unexplained Infertility",
    "Not Sure",
  ];

  return (
    <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-8">
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <div>
          <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
            Step 3 of 6
          </span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">
            Why Are You Considering IVF?
          </h2>
        </div>
        <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-3.5 py-1.5 rounded-full">
          Personalisation 69%
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {factorsList.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onChange("selectedFactor", item)}
            className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between text-sm font-bold ${
              data.selectedFactor === item
                ? "border-teal-600 bg-teal-50/70 text-teal-900 shadow-md ring-2 ring-teal-600/20"
                : "border-slate-200/80 bg-slate-50/50 text-slate-700 hover:border-slate-300 hover:bg-white"
            }`}
          >
            <span>{item}</span>
            <span
              className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${data.selectedFactor === item ? "bg-teal-600 border-teal-600 text-white font-bold" : "border-slate-300 bg-white"}`}
            >
              {data.selectedFactor === item && "✓"}
            </span>
          </div>
        ))}
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
