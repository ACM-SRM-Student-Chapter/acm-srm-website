import Navigation from "@/components/global/Navigation";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      {/* Heading */}
      <div className="flex bg-[#FFCBB0] justify-center items-center lg:h-[28rem] md:h-[20rem] sm:h-[16rem] h-[16rem]">
        <h1 className="text-black text-center font-bold lg:text-7xl md:text-5xl sm:text-4xl text-3xl leading-tight sm:mt-12 mt-[80px] sm:px-4 px-8 md:mt-12">
          Welcome to the<br />
          Gallery of ACM
        </h1>
      </div>
      {/* Gallery */}
      <div className="columns-2 gap-4 px-4 md:columns-3 lg:columns-4 m-4 max-w-4xl mx-auto mt-4">
        {/* Images */}
        <img className="mb-4 w-full rounded-lg object-cover" src="images/gallery-1.png" alt="Gallery Image 1" />
        <img className="mb-4 w-full rounded-lg object-cover" src="images/gallery-3.png" alt="Gallery Image 2" />
        <img className="mb-4 w-full rounded-lg object-cover" src="images/gallery-2.png" alt="Gallery Image 3" />
        <img className="mb-4 w-full rounded-lg object-cover" src="images/gallery-4.png" alt="Gallery Image 4" />
        <img className="mb-4 w-full rounded-lg object-cover" src="images/gallery-5.png" alt="Gallery Image 5" />
        <img className="mb-4 w-full rounded-lg object-cover" src="images/gallery-6.png" alt="Gallery Image 6" />
        <img className="mb-4 w-full rounded-lg object-cover" src="images/gallery-7.png" alt="Gallery Image 7" />
        <img className="mb-4 w-full rounded-lg object-cover" src="images/gallery-8.png" alt="Gallery Image 8" />
        <img className="mb-4 w-full rounded-lg object-cover" src="images/gallery-9.png" alt="Gallery Image 9" />
        <img className="mb-4 w-full rounded-lg object-cover" src="images/gallery-10.png" alt="Gallery Image 10" />
        <img className="mb-4 w-full rounded-lg object-cover" src="images/gallery-11.png" alt="Gallery Image 11" />
        <img className="mb-4 w-full rounded-lg object-cover" src="images/gallery-5.png" alt="Gallery Image 5" />
      </div>

      {/* Footer */}
      <footer className="w-full px-4 py-8 border-t border-gray-200">
        <div className="max-w-[1920px] mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/acm-logo.svg"
              alt="ACM Logo"
              width={120}
              height={120}
              priority
            />
            <div className="text-2xl font-bold tracking-wide">
              SRMIST-KTR
              <br />
              <span className="text-sm">STUDENT CHAPTER</span>
            </div>
          </div>
          <p className="text-base">
            ACM SRM © {new Date().getFullYear()}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
