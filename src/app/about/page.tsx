import Navigation from "@/components/global/Navigation";
import Image from "next/image";
export default function AboutPage() {
    return (
      <div className="">
        <Navigation/>
        <main className="pt-24 flex flex-col ">
          <div className="w-screen h-custom1 mx-auto  flex flex-col align-middle  bg-customGold items-center pt-16 mb-60 ">
            <div className=" text-5xl md:text-[118px] font-title font-bold tracking-widest mb-5 ">
              About Us
            </div>
            
            <p className="text-5xl md:text-[50px] font-title tracking-wider  w-customw1 mb-2.5">Dedicated to technical, professional, and personal development in the context of computer science.</p>
            
            <div className="flex flex-row justify-center align-middle items-center">
              <Image className="mr-2 rounded-3xl"
                src="/images/image1.png"
                alt="description"
                width={258} 
                height={258}
              />
              <Image className="mr-2 rounded-3xl" style={{ width: '258px', height: '137px' }}
                src="/images/image1.png"
                alt="description"
                width={258} 
                height={137}
              />
              <Image className="mr-2 rounded-3xl"
                src="/images/image1.png"
                alt="description"
                width={258} 
                height={258}
              />
              <Image className="rounded-3xl" style={{ width: '258px', height: '137px' }}
                src="/images/image1.png"
                alt="description"
                width={258} 
                height={137}
              />
          </div>
          </div>
          <div className="flex flex-row justify-center align-middle items-center  ">
            <div className="text-5xl md:text-[68px] font-title tracking-wider font-semibold   mb-9">
              Empowering Minds, Shaping the Future of Computing.
            </div>
          </div>
          
          <div className="flex flex-row text-5xl md:text-[49px] font-title font-normal justify-center align-middle items-center mb-32 ">
            <div className="w-customw3 mr-9">content</div>
            <div className="w-customw3">content</div>
          </div>
          <div className="flex flex-row mb-16 justify-center align-middle items-center">
            <div className=" bg-customgrey  font-title w-customw4 mr-5 h-custom2 text-5xl md:text-[99px] pl-28 pt-24">
              image/illustration
            </div>
            <div className="bg-customorange font-title w-customw4 h-custom2 text-5xl md:text-[99px] flex flex-col  pl-7 pt-6 ">
              <div className="font-bold">Our Vision</div>
              <div className="font-normal">content</div>
            </div>
          </div>
          <div className="flex flex-row mb-16 justify-center align-middle items-center">
            <div className="bg-customblue  font-title  w-customw4 mr-5 h-custom2 text-5xl md:text-[99px] flex flex-col  pl-7 pt-6">
              <div className="font-bold">What We Do</div>
              <div className="font-normal">content</div>
            </div>
            <div className="bg-customgrey font-title w-customw4 h-custom2 text-5xl md:text-[99px] pl-28 pt-24">
            image/illustration
            </div>
          </div>
          <div className="flex flex-row mb-16 justify-center align-middle items-center">
            <div className=" bg-customgrey font-title w-customw4 mr-5 h-custom2 text-5xl md:text-[99px] pl-28 pt-24">
            image/illustration
            </div>
            <div className="bg-custombrown font-title w-customw4 h-custom2 text-5xl md:text-[99px] pl-7 pt-6">
              <div className="font-bold">Why We Do</div>
              <div className="font-normal">content</div>
            </div>
          </div>
        </main> 
        <footer className="w-full px-4 md:px-32 py-16 border-t border-gray-200">
          <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <Image
                src="/images/acm-logo.svg"
                alt="ACM Logo"
                width={80}
                height={80}
                priority
              />
              <div className="text-xl font-title">
                SRMIST-KTR
                <br />
                STUDENT CHAPTER
              </div>
            </div>
            <p className="text-sm font-poly">
              ACM SRM © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
      
    )
  }
  