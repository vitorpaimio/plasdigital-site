import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#005af9] p-1.5 rounded-lg text-white">
              <img
                src="/images/logo.webp"
                alt="Plas Digital"
                className="w-[18px] h-[18px] object-contain"
              />
            </div>
            <span className="font-bold text-lg text-neutral-900 tracking-tight">
              Plas Digital
            </span>
          </div>

          <div className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Plas Digital. Todos os direitos
            reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
