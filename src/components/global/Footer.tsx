import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full px-4 md:px-16 py-8 md:py-12 border-t border-black/5">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        <div className="flex items-center gap-4 md:gap-6">
          <Image
            src="/images/acm-logo.svg"
            alt="ACM Logo"
            width={40}
            height={40}
            className="md:w-[60px] md:h-[60px]"
            priority
          />
          <div className="text-base md:text-lg font-title">
            SRMIST-KTR<br />
            STUDENT CHAPTER
          </div>
          <Image
            src="/images/acm_logo_tablet.svg"
            alt="ACM Logo Tablet"
            width={100}
            height={100}
            className="md:w-[120px] md:h-[120px]"
            priority
          />
          <Image
            src="/images/srm-logo.svg"
            alt="SRM Logo"
            width={100}
            height={100}
            className="md:w-[120px] md:h-[120px]"
            priority
          />
          <Image
            src="/images/ctech-logo.svg"
            alt="CTech Logo"
            width={100}
            height={100}
            className="md:w-[120px] md:h-[120px]"
            priority
          />
        </div>
        <p className="text-xs md:text-sm font-poly text-black/60 text-center md:text-left">
          ACM SRM © {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}