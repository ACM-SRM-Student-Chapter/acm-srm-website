import Navigation from "@/components/global/Navigation";
import Image from "next/image";
import img1 from '../../../public/images/grpimg1.png'
import img2 from '../../../public/images/grpimg2.png'
import a1 from '../../../public/images/abt1.png'
import a2 from '../../../public/images/abt2.png'
import a3 from '../../../public/images/abt3.png'
export default function AboutPage() {
    return (
      <div className="">
      <Navigation/>
      <main className="pt-24 flex flex-col ">
        <div className="bg-[#FDDC68] font-title">
          <p className="text-center text-black lg:text-9xl font-bold tracking-widest   pt-10">ABOUT US</p>
          <p className="lg:text-5xl text-black text-center tracking-widest lg:pb-40">Dedicated to techincal, professional, and personal <br /> development in the context of computer science.</p>


        </div>
        <div  className="flex justify-center items-start relative gap-1 lg:gap-7">
          <Image
                src={img1}
                alt="line"
                className="w-[87px] h-[87px]  lg:w-[300px] lg:h-[300px] rounded-3xl  transform -translate-y-1/2"
                />

          <Image
                src={img2}
                alt="line"
                className=" w-[87px] h-[46px]   lg:w-[275px] lg:h-[157px] rounded-3xl  transform -translate-y-1/2 "
                />

          <Image
                src={img1}
                alt="line"
                className="w-[87px] h-[87px]  lg:w-[300px] lg:h-[300px] rounded-3xl transform -translate-y-1/2 "
                />

          <Image
                src={img2}
                alt="line"
                className="w-[87px] h-[46px]  lg:w-[275px] lg:h-[157px] rounded-3xl transform -translate-y-1/2 "
                />
                
          </div>

          <div className="px-4 md:px-36">

          <p className="font-title font-semibold lg:text-7xl tracking-widest text-center">Empowering Minds, <br />Shaping the Future of Computing.</p>

          <div className="flex flex-row justify-center items-center lg:gap-10 lg:pt-10">

          <Image
                src={a1}
                alt="line"
                className="  lg:w-[350px] lg:h-[310px] rounded-3xl "
                />

            <div className="bg-[#FF6F00] w-[350px] h-[310px] rounded-3xl py-10 px-8">
              <h1 className="text-black text-center font-bold font-title tracking-widest lg:text-6xl ">Our Vision</h1>

              <p className="font-title text-black text-center text-[16px] text-nowrap tracking-widest pt-4">We aim to build a vibrant tech community that bridges <br /> the gap between theory and application. By hosting <br /> workshops, hackathons, and seminars, we empower <br /> members with industry-relevant skills, foster <br /> innovation, and provide a platform to thrive. Together, <br /> we push boundaries and shape future tech leaders.</p>

            </div>

          </div>

          <div className="flex flex-row justify-center items-center lg:gap-10 lg:pt-5">

          
            <div className="bg-[#0A95DA] w-[350px] h-[310px] rounded-3xl py-10 px-8">
              <h1 className="text-black text-center font-bold font-title tracking-widest lg:text-6xl ">What We Do</h1>
              <p className="font-title text-black text-center text-[18px] text-wrap tracking-widest">The ACM SRM Content Team creates impactful content to engage and educate:</p>
              <p className="font-title text-black text-start text-[16px] text-nowrap tracking-widest"><b>Articles & Blogs:</b> Insights on tech trends and innovations. </p>
              <p className="font-title text-black text-start text-[16px] text-nowrap tracking-widest"><b>Tutorials & Guides:</b> Learning resources for all levels. </p>
              <p className="font-title text-black text-start text-[16px] text-nowrap tracking-widest"><b> Event Coverage:</b> Promoting and documenting club events. </p>
              <p className="font-title text-black text-start text-[16px] text-nowrap tracking-widest"><b>Social Media:</b> Engaging posts and updates. </p>
              <p className="font-title text-black text-start text-[16px] text-nowrap tracking-widest"><b>Newsletters:</b>  Keeping members informed and connected. </p>
              

            </div>


            <Image
                src={a2}
                alt="line"
                className="  lg:w-[350px] lg:h-[310px] rounded-3xl "
                />


          </div>

          <div className=" flex flex-row justify-center items-center lg:gap-10 lg:pt-5">

          <Image
                src={a3}
                alt="line"
                className="  lg:w-[350px] lg:h-[310px] rounded-3xl "
                />

<div className="bg-[#FFCBB0] w-[350px] h-[310px] rounded-3xl py-10 px-8">
              <h1 className="text-black text-center font-bold font-title tracking-widest lg:text-6xl lg:pb-5 ">Why We Do</h1>
              <p className="font-title text-black text-start text-[28px] text-wrap tracking-widest">We create content to:</p>
              <p className="font-title text-black text-start text-[16px] text-nowrap tracking-widest"><b>Educate:</b> Share tech insights and learning resources. </p>
              <p className="font-title text-black text-start text-[16px] text-nowrap tracking-widest"><b> Promote:</b> Boost participation in events. </p>
              <p className="font-title text-black text-start text-[16px] text-nowrap tracking-widest"><b> Engage:</b> Build a collaborative online community. </p>
              <p className="font-title text-black text-start text-[16px] text-nowrap tracking-widest"><b>Showcase Talent:</b> Celebrate achievements and excellence.  </p>
              <p className="font-title text-black text-start text-[16px] text-nowrap tracking-widest"><b>Build Community:</b>   Unite tech enthusiasts to learn and grow. </p>
              
{/*Why We Do We create content to: Educate: Share tech insights and learning resources. Promote: Boost participation in events. Engage: Build a collaborative online community. Showcase Talent: Celebrate achievements and excellence. Build Community: Unite tech enthusiasts to learn and grow. */}
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