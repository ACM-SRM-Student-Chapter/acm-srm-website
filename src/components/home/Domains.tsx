"use client";
import Image from 'next/image';

export default function Domains() {
  const domainItems = [
    {
      icon: "/images/corporate.svg",
      name: "Corporate",
      width: 909,
      height: 610
    },
    {
      icon: "/images/design.svg",
      name: "Design",
      width: 554,
      height: 523
    },
    {
      icon: "/images/technical.svg",
      name: "Technical",
      width: 713,
      height: 533
    },
    {
      icon: "/images/event.svg",
      name: "Event Management",
      width: 790,
      height: 526
    }
  ];

  const lines = ["/images/line.svg", "images/line2.svg", "/images/line3.svg"];

  return (
    <div className="w-full flex flex-col items-center px-4 md:px-32 py-16">
      <p className="mb-4 md:text-[24px]">Together, we excel in</p>
      <h2 className="text-5xl md:text-[150px] font-title font-bold text-center leading-tight mb-24">
        OUR DOMAINS
      </h2>
      <div className="flex items-center justify-center w-full max-w-[1600px]">
        {domainItems.map((domain, index) => (
          <div key={domain.name} className="flex items-center">
            <div className="flex flex-col items-center gap-6">
              <Image
                src={domain.icon}
                alt={domain.name}
                width={domain.width}
                height={domain.height}
                className="object-contain"
              />
              <span className="text-2xl font-poly font-bold text-[22px]">{domain.name}</span>
            </div>
            {index < domainItems.length - 1 && (
              <div className="flex items-center mx-6">
                <Image
                  src={lines[index]}
                  alt="connecting line"
                  width={120}
                  height={200}
                  className="object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
