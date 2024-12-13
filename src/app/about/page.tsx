import Navigation from "@/components/global/Navigation";
import Image from "next/image";
import img1 from '../../../public/images/grpimg1.png'
import img2 from '../../../public/images/grpimg2.png'
import a1 from '../../../public/images/abt1.png'
import a2 from '../../../public/images/abt2.png'
import a3 from '../../../public/images/abt3.png'
import va from '../../../public/images/v1.png'
import vb from '../../../public/images/v2.png'
import vc from '../../../public/images/v3.png'
export default function AboutPage() {
    return (
      <div className="">
      <Navigation/>
      <main className="pt-24 flex flex-col ">
        <div className="bg-[#FDDC68] font-title">
          <p className="text-center text-black text-5xl md:text-7xl lg:text-9xl font-bold tracking-widest lg:pt-16  pt-10">About Us</p>
          <p className="text-xl md:text-3xl lg:text-5xl text-black text-center tracking-widest pb-[60px] md:pb-24 lg:pb-40">Dedicated to techincal, professional, and personal <br /> development in the context of computer science.</p>


          <Image
                src={va}
                alt="fig"
                className="absolute hidden md:block lg:block md:w-[18px] md:h-[11px]  lg:w-[30px] lg:h-[20px]  md:-mt-[243px] md:ml-[480px] lg:-mt-[390px] lg:ml-[890px] "
                />


<Image
                src={vb}
                alt="fig"
                className="absolute hidden md:block lg:block md:w-[23px] md:h-[13px]  lg:w-[35px] lg:h-[18px] -mt-[170px] ml-[240px] md:-mt-[213px] md:ml-[502px] lg:-mt-[325px] lg:ml-[930px] "
                />

<Image
                src={vc} 
                alt="fig"
                className="absolute hidden md:block lg:block md:w-[33px] md:h-[13px]  lg:w-[45px] lg:h-[15px]  md:-mt-[193px] md:ml-[500px] lg:-mt-[290px] lg:ml-[930px] "
                />

        </div>

        <div  className="flex justify-center items-start relative gap-1 md:gap-4 lg:gap-7">
          <Image
                src={img1}
                alt="line"
                className="w-[87px] h-[87px] md:w-[137px] md:h-[137px]  lg:w-[300px] lg:h-[300px] rounded-xl lg:rounded-3xl  transform -translate-y-1/2"
                />

          <Image
                src={img2}
                alt="line"
                className=" w-[87px] h-[46px]  md:w-[137px] md:h-[96px] lg:w-[275px] lg:h-[157px] rounded-xl lg:rounded-3xl  transform -translate-y-1/2 "
                />

          <Image
                src={img1}
                alt="line"
                className="w-[87px] h-[87px] md:w-[137px] md:h-[137px] lg:w-[300px] lg:h-[300px] rounded-xl lg:rounded-3xl transform -translate-y-1/2 "
                />

          <Image
                src={img2}
                alt="line"
                className="w-[87px] h-[46px] md:w-[137px] md:h-[96px]  lg:w-[275px] lg:h-[157px] rounded-xl  lg:rounded-3xl transform -translate-y-1/2 "
                />
                
          </div>
        


          <div >
          <p className="font-title font-semibold text-3xl md:text-5xl lg:text-7xl tracking-widest text-center">Empowering Minds, <br />Shaping the Future of Computing.</p>

          <p className="font-title  text-xs md:text-xl lg:text-4xl tracking-widest text-center pt-3 lg:pt-10">At ACM SRM, we empower students with hands-on learning and exposure to the latest tech. <br /> By fostering collaboration and working on impactful projects based on Al and Blockchain, <br /> we inspire members to lead and innovate. Together, we're building tomorrow's tech <br /> leaders and changemakers.</p>


          <div className="px-2">

          

          <div className="flex flex-row justify-center items-center gap-2 md:gap-5 lg:gap-10 pt-4 md:pt-6 lg:pt-10">

          <Image
                src={a1}
                alt="line"
                className="w-[181px] h-[146px] md:w-[251px] md:h-[206px]  lg:w-[350px] lg:h-[310px] rounded-xl md:rounded-3xl "
                />

            <div className="bg-[#FF6F00] w-[181px] h-[146px] md:w-[251px] md:h-[206px] lg:w-[350px] lg:h-[310px] rounded-xl md:rounded-3xl py-3 px-1 md:py-5 md:px-2 lg:py-10 lg:px-8">
              <h1 className="text-black text-center font-bold font-title tracking-widest text-2xl md:text-4xl lg:text-6xl ">Our Vision</h1>

              <p className="font-title text-black text-center text-[9px] md:text-[12px] lg:text-[16px] text-nowrap tracking-widest pt-2 lg:pt-4">We aim to build a vibrant tech community that bridges <br /> the gap between theory and application. By hosting <br /> workshops, hackathons, and seminars, we empower <br /> members with industry-relevant skills, foster <br /> innovation, and provide a platform to thrive. Together, <br /> we push boundaries and shape future tech leaders.</p>

            </div>

          </div>

          <div className="flex flex-row justify-center items-center gap-2 md:gap-5 lg:gap-10 pt-4 md:pt-6 lg:pt-10">

          
            <div className="bg-[#0A95DA] w-[181px] h-[146px] md:w-[251px] md:h-[206px] lg:w-[350px] lg:h-[310px] rounded-xl md:rounded-3xl py-1 px-2 md:py-5 md:px-2 lg:py-10 lg:px-8">
              <h1 className="text-black text-center font-bold font-title tracking-widest text-2xl md:text-4xl lg:text-6xl ">What We Do</h1>
              <p className="font-title text-black text-center text-[9px] md:text-[12px] lg:text-[16px] text-wrap md:text-wrap tracking-widest pt-1 lg:pt-4">The ACM SRM Content Team creates impactful content to engage and educate:</p>
              <p className="font-title text-black text-start text-[9px] md:text-[12px] lg:text-[16px] text-nowrap tracking-widest pt-1 lg:pt-4"><b>Articles & Blogs:</b> Insights on tech trends and innovations. <br /> <b>Tutorials & Guides:</b> Learning resources for all levels. <br /><b> Event Coverage:</b> Promoting and documenting club events. <br /> <b>Social Media:</b> Engaging posts and updates. <br /> <b>Newsletters:</b>  Keeping members informed and connected.  </p>
             
              
              

            </div>


            <Image
                src={a2}
                alt="line"
                className="w-[181px] h-[146px] md:w-[251px] md:h-[206px]  lg:w-[350px] lg:h-[310px] rounded-xl md:rounded-3xl  "
                />


          </div>

          <div className="flex flex-row justify-center items-center gap-2 md:gap-5 lg:gap-10 pt-4 md:pt-6 lg:pt-10">

          <Image
                src={a3}
                alt="line"
                className=" w-[181px] h-[146px] md:w-[251px] md:h-[206px]  lg:w-[350px] lg:h-[310px] rounded-xl md:rounded-3xl  "
                />

<div className="bg-[#FFCBB0] w-[181px] h-[146px] md:w-[251px] md:h-[206px] lg:w-[350px] lg:h-[310px] rounded-xl md:rounded-3xl py-1 px-2 md:py-5 md:px-4 lg:py-10 lg:px-8">
              <h1 className="text-black text-center font-bold font-title tracking-widest text-2xl md:text-4xl lg:text-6xl">Why We Do</h1>
              <p className="font-title text-black text-start text-[12px] md:text-[17px] lg:text-[28px] text-wrap md:text-nowrap tracking-widest pt-1 lg:pt-4">We create content to:</p>
              <p className="font-title text-black text-start text-[9px] md:text-[12px] lg:text-[16px] text-nowrap tracking-widest pt-1 lg:pt-4"><b>Educate:</b> Share tech insights and learning resources. <br /> <b> Promote:</b> Boost participation in events. <br /> <b> Engage:</b> Build a collaborative online community. <br /> <b>Showcase Talent:</b> Celebrate achievements and excellence. <br /> <b>Build Community:</b> Unite tech enthusiasts to learn and grow.</p>

            </div>
          </div>
      










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