import logoImg from "../assets/logo.jpeg";
export default function Navbar() {
  return (
    <header className="flex justify-between items-center mb-10 pb-6 border-b border-slate-100">
      <div className="flex items-center gap-3">
        <img src={logoImg} alt="Clinic Logo" className="w-50 h-20" />
      </div>
      <div className="text-right">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
          IVF Success Calculator
        </p>
        <p className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md inline-block mt-1">
          Educational estimate
        </p>
      </div>
    </header>
  );
}
