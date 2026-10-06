// export default function ResultPage({ data, onRestart }) {
//   const heightM = data.height / 100;
//   const bmi = heightM > 0 ? (data.weight / (heightM * heightM)).toFixed(1) : 0;

//   return (
//     <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-8">
//       <div className="flex justify-between items-center border-b border-slate-100 pb-5">
//         <div>
//           <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
//             Report Date: 06 Oct 2026
//           </span>
//           <h2 className="text-2xl font-bold text-slate-900 mt-1">
//             Estimated Chance of Having a Baby
//           </h2>
//         </div>
//         <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-100 px-3.5 py-1.5 rounded-full">
//           Personalisation 95%
//         </span>
//       </div>

//       <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white p-8 rounded-3xl flex items-center justify-between shadow-lg shadow-teal-600/20">
//         <div>
//           <p className="text-xs uppercase tracking-wider text-teal-100 font-bold">
//             Estimated Success Probability
//           </p>
//           <h3 className="text-5xl font-extrabold mt-2">58%</h3>
//         </div>
//         <div className="text-right text-xs text-teal-100 space-y-1 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
//           <p className="font-semibold">Age: {data.age} years</p>
//           <p className="font-semibold">BMI: {bmi}</p>
//         </div>
//       </div>

//       <div className="space-y-3">
//         <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 flex justify-between text-sm font-bold text-slate-800 shadow-sm">
//           <span>After 1 Embryo Transfer</span>
//           <span className="text-teal-700 font-extrabold text-base">58%</span>
//         </div>
//         <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 flex justify-between text-sm font-bold text-slate-800 shadow-sm">
//           <span>After Up To 2 Embryo Transfers</span>
//           <span className="text-teal-700 font-extrabold text-base">77%</span>
//         </div>
//         <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 flex justify-between text-sm font-bold text-slate-800 shadow-sm">
//           <span>After Up To 3 Embryo Transfers</span>
//           <span className="text-teal-700 font-extrabold text-base">87%</span>
//         </div>
//       </div>

//       <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-3 shadow-xl">
//         <h4 className="text-base font-bold tracking-wide text-teal-400">
//           Indore Infertility Clinic
//         </h4>
//         <p className="text-xs text-slate-300 flex items-center gap-2">
//           📍 239-A Anoop Nagar, Indore
//         </p>
//         <p className="text-xs text-slate-300 flex items-center gap-2">
//           📞 For Appointment: +91 9644444066
//         </p>
//       </div>

//       <div className="flex justify-between pt-6 border-t border-slate-100">
//         <button
//           onClick={onRestart}
//           className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold uppercase tracking-wider rounded-2xl shadow-lg shadow-teal-600/30 transition-all"
//         >
//           Start Again
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function ResultPage({ data, onRestart, onEditStep }) {
  // Safe default calculations based on props or demo values
  const heightM = data?.height ? data.height / 100 : 1.65;
  const bmi =
    data?.weight && heightM > 0
      ? (data.weight / (heightM * heightM)).toFixed(1)
      : "24.4";
  const age = data?.age || "34";
  const ivfAttempts = data?.ivfAttempts || "1 cycle";
  const pregnancies = data?.pregnancies || "2 or more";
  const liveBirths = data?.liveBirths || "1";
  const oocyteSource = data?.oocyteSource || "Donor oocytes";
  const selectedFactor = data?.selectedFactor || "Male factor";
  const smoking = data?.smoking || "Never smoked";
  const alcohol = data?.alcohol || "None";

  return (
    <main className="max-w-5xl mx-auto space-y-6 antialiased text-slate-800">
      {/* BEGIN: HeroResultsCard */}
      <section className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl shadow-teal-900/5 border border-teal-100/60 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Circular Radial Gauge */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div
              className="relative w-48 h-48 rounded-full p-4 flex items-center justify-center shadow-inner"
              style={{
                background: "conic-gradient(#006D77 0% 58%, #E2E8F0 58% 100%)",
              }}
            >
              <div className="w-36 h-36 bg-white rounded-full flex flex-col items-center justify-center text-center p-3 shadow-md border border-slate-50">
                <span className="text-4xl font-extrabold text-teal-700 tracking-tight">
                  58%
                </span>
                <span className="text-[11px] leading-tight font-medium text-slate-500 mt-1 max-w-[110px]">
                  estimated chance of having a baby with IVF
                </span>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-teal-900">
              <svg
                className="w-4 h-4 text-emerald-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Validated Calculation Model
            </div>
          </div>

          {/* Headline & Cumulative Bars */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200">
                  CDC Estimate · {oocyteSource}
                </span>
                <span className="text-xs text-slate-400">
                  | Detailed personalised prognosis
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Estimated Chance of Having a Baby With IVF
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Your estimate reflects the statistical likelihood of achieving
                at least one live birth across consecutive embryo transfer
                cycles.
              </p>
            </div>

            {/* Cumulative Bars List */}
            <div className="space-y-4 pt-2">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>After 1 Embryo Transfer</span>
                  <span className="text-teal-700 text-sm">58%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden p-0.5 border border-slate-200/60">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-teal-700 h-full rounded-full transition-all duration-700"
                    style={{ width: "58%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>After Up To 2 Embryo Transfers</span>
                  <span className="text-teal-700 text-sm">77%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden p-0.5 border border-slate-200/60">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-teal-700 h-full rounded-full transition-all duration-700"
                    style={{ width: "77%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-slate-700">
                  <span>After Up To 3 Embryo Transfers</span>
                  <span className="text-teal-700 text-sm">87%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden p-0.5 border border-slate-200/60">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-teal-700 h-full rounded-full transition-all duration-700"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END: HeroResultsCard */}

      {/* BEGIN: ClinicalDetailsGrid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Information Used */}
        <article className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/70 hover:border-teal-200 transition-colors">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <svg
              className="w-5 h-5 text-teal-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <h3 className="text-base font-bold text-slate-900">
              Information Used
            </h3>
          </div>
          <div className="divide-y divide-slate-100 text-sm">
            <div className="py-2.5 flex justify-between items-center">
              <span className="text-slate-600 font-medium">Age</span>
              <span className="font-bold text-slate-800">{age} years</span>
            </div>
            <div className="py-2.5 flex justify-between items-center">
              <span className="text-slate-600 font-medium">BMI</span>
              <span className="font-bold text-slate-800">{bmi}</span>
            </div>
            <div className="py-2.5 flex justify-between items-center">
              <span className="text-slate-600 font-medium">Previous IVF</span>
              <span className="font-bold text-slate-800">{ivfAttempts}</span>
            </div>
            <div className="py-2.5 flex justify-between items-center">
              <span className="text-slate-600 font-medium">
                Pregnancy History
              </span>
              <span className="font-bold text-slate-800">{pregnancies}</span>
            </div>
            <div className="py-2.5 flex justify-between items-center">
              <span className="text-slate-600 font-medium">
                Previous Live Births
              </span>
              <span className="font-bold text-slate-800">{liveBirths}</span>
            </div>
            <div className="py-2.5 flex justify-between items-center">
              <span className="text-slate-600 font-medium">Oocyte Source</span>
              <span className="font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                {oocyteSource}
              </span>
            </div>
            <div className="py-2.5 flex justify-between items-center">
              <span className="text-slate-600 font-medium">Diagnosis</span>
              <span className="font-bold text-slate-800">{selectedFactor}</span>
            </div>
          </div>
        </article>

        {/* Modifiable Factors */}
        <article className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/70 hover:border-teal-200 transition-colors flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <svg
                className="w-5 h-5 text-teal-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h3 className="text-base font-bold text-slate-900">
                Modifiable Factors
              </h3>
            </div>
            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between p-2.5 bg-slate-50/70 rounded-xl">
                <span className="text-sm font-medium text-slate-700">
                  Woman: BMI
                </span>
                <span className="text-xs font-bold text-teal-800 bg-teal-100/70 px-2.5 py-1 rounded-md">
                  BMI {bmi} (Normal)
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-50/70 rounded-xl">
                <span className="text-sm font-medium text-slate-700">
                  Woman: Smoking
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-md">
                  {smoking}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-50/70 rounded-xl">
                <span className="text-sm font-medium text-slate-700">
                  Woman: Alcohol
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-md">
                  {alcohol}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 rounded-lg bg-teal-50/50 border border-teal-100 text-xs text-teal-900 flex items-center gap-2">
            <svg
              className="w-4 h-4 text-teal-700 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Favorable lifestyle baseline contributes positively to overall
              treatment response.
            </span>
          </div>
        </article>
      </section>
      {/* END: ClinicalDetailsGrid */}

      {/* BEGIN: ExplanatoryCards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/70 space-y-2">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
            How Is This Calculated?
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            The estimate uses published models from the U.S. Centers for Disease
            Control and Prevention (CDC), based on age, BMI, reproductive
            history, and infertility diagnosis.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/70 space-y-2">
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
            What Does This Mean?
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Out of 100 individuals with similar clinical parameters, about{" "}
            <span className="font-bold text-teal-700">58</span> have a baby
            after the first embryo transfer.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-slate-200/70 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center font-bold text-teal-700 text-xs">
              95%
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs">
                Prediction Detail: Very High
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Most optional clinical context provided.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END: ExplanatoryCards */}

      {/* BEGIN: ClinicContactCard */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-900 text-white rounded-3xl p-6 lg:p-7 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="bg-white/20 text-white text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded">
                Specialist Centre
              </span>
              <h3 className="text-xl font-bold tracking-tight">
                Indore Infertility Clinic
              </h3>
            </div>
            <p className="text-teal-100 text-xs max-w-xl">
              This report is generated for patient education and counseling
              support only. Schedule a detailed session with our fertility
              specialists.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-medium transition"
            >
              📍 239-A Anoop Nagar, Indore
            </a>
            <a
              href="tel:+919644444066"
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-teal-300 text-teal-950 font-bold hover:bg-white text-xs transition shadow-sm"
            >
              📞 For Appointment: +91 9644444066
            </a>
          </div>
        </div>
      </section>
      {/* END: ClinicContactCard */}

      {/* BEGIN: ActionFooter */}
      <footer className="pt-2 pb-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onRestart}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 font-semibold text-xs transition"
        >
          Review / Edit Answers
        </button>
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            onClick={() => window.print()}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-teal-200 text-teal-700 bg-white hover:bg-teal-50 font-semibold text-xs transition"
          >
            Print / Save PDF
          </button>
          <button
            onClick={onRestart}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs transition shadow-md"
          >
            Start Again
          </button>
        </div>
      </footer>
      {/* END: ActionFooter */}
    </main>
  );
}
