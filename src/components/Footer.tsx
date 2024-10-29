// components/Footer.tsx
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="py-32 bg-[#0A1F44]/10 space-y-12 grid grid-flow-row place-items-center">
      <h1 className="text-5xl font-bold text-[#0A1F44] tracking-tighter">Perezzi</h1>
      <div className="flex gap-x-8">
        <Image src="/img/facebook.svg" alt="Facebook" width={48} height={48} className="w-12" />
        <Image src="/img/instagram.svg" alt="Instagram" width={48} height={48} className="w-12" />
        <Image src="/img/twitter.svg" alt="Twitter" width={48} height={48} className="w-12" />
        <Image src="/img/youtube.svg" alt="YouTube" width={48} height={48} className="w-12" />
      </div>
      <ul className="flex gap-x-6 font-[Manrope] font-bold text-[#0A1F44]">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Collections</li>
      </ul>
    </footer>
  );
};

export default Footer;
