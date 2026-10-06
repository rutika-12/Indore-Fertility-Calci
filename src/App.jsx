import { useState } from "react";
import Navbar from "./component/Navbar";
import LandingPage from "./component/LandingPage";
import Step1About from "./component/Step1About";
import Step2History from "./component/Step2History";
import Step3Factors from "./component/Step3Factors";
import Step4Treatment from "./component/Step4Treatment";
import Step5Sperm from "./component/Step5Sperm";
import Step6Lifestyle from "./component/Step6Lifestyle";
import ResultPage from "./component/ResultPage";

export default function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    age: 34,
    height: 162,
    weight: 64,
    ivfAttempts: "",
    pregnancies: "",
    liveBirths: "",
    selectedFactor: "",
    oocyteSource: "",
    amh: "",
    afc: "",
    semenAnalysis: "",
    smoking: "",
    alcohol: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Validation function before moving to next step
  const handleNextStep = (currentStepNum) => {
    if (currentStepNum === 1) {
      if (!formData.age || !formData.height || !formData.weight) {
        alert("Please fill in Age, Height, and Weight before proceeding.");
        return;
      }
    } else if (currentStepNum === 2) {
      if (
        !formData.ivfAttempts ||
        !formData.pregnancies ||
        !formData.liveBirths
      ) {
        alert("Please select options for all reproductive history fields.");
        return;
      }
    } else if (currentStepNum === 3) {
      if (!formData.selectedFactor) {
        alert("Please select why you are considering IVF.");
        return;
      }
    } else if (currentStepNum === 4) {
      if (!formData.oocyteSource) {
        alert("Please select a Planned Oocyte Source.");
        return;
      }
    } else if (currentStepNum === 5) {
      if (!formData.semenAnalysis) {
        alert("Please select a Semen Analysis option.");
        return;
      }
    } else if (currentStepNum === 6) {
      if (!formData.smoking || !formData.alcohol) {
        alert("Please select your smoking and alcohol habits.");
        return;
      }
    }
    setStep(currentStepNum + 1);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 flex flex-col font-sans">
      <div className="max-w-5xl mx-auto w-full">
        <Navbar />

        {step === 0 && <LandingPage onStart={() => setStep(1)} />}
        {step === 1 && (
          <Step1About
            data={formData}
            onChange={handleChange}
            onNext={() => handleNextStep(1)}
            onBack={() => setStep(0)}
          />
        )}
        {step === 2 && (
          <Step2History
            data={formData}
            onChange={handleChange}
            onNext={() => handleNextStep(2)}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <Step3Factors
            data={formData}
            onChange={handleChange}
            onNext={() => handleNextStep(3)}
            onBack={() => setStep(2)}
          />
        )}
        {step === 4 && (
          <Step4Treatment
            data={formData}
            onChange={handleChange}
            onNext={() => handleNextStep(4)}
            onBack={() => setStep(3)}
          />
        )}
        {step === 5 && (
          <Step5Sperm
            data={formData}
            onChange={handleChange}
            onNext={() => handleNextStep(5)}
            onBack={() => setStep(4)}
          />
        )}
        {step === 6 && (
          <Step6Lifestyle
            data={formData}
            onChange={handleChange}
            onNext={() => handleNextStep(6)}
            onBack={() => setStep(5)}
          />
        )}
        {step === 7 && (
          <ResultPage data={formData} onRestart={() => setStep(0)} />
        )}
      </div>
    </div>
  );
}
