import Image from "next/image";

import p1 from "../../../public/images/picone.png";
import evpic from "../../../public/images/evepic.png";
import corpic from "../../../public/images/corppic.png";
import techpic from "../../../public/images/techpic.png";
import crtv from "../../../public/images/crtvpic.png";
import l8 from "../../../public/images/line8.png";
import l9 from "../../../public/images/Line9.png";
import l10 from "../../../public/images/line10.png";
import l11 from "../../../public/images/Line11.png";
import l12 from "../../../public/images/Line12.png";

export default function TeamsPage() {
  return (
    <main className="pt-24 px-4 md:px-32">
      <div className="max-w-[1920px] mx-auto">
        <h1 className="text-7xl md:text-8xl  lg:text-9xl  font-title font-bold text-center tracking-widest">Meet the Minds</h1>
        <p className="text-xl md:text-3xl pb-8 lg:text-4xl font-title text-center tracking-widest">
          A dynamic team shaping the future of technology, innovation, and collaboration
        </p>

        <div className="bg-[#ebe8e8] rounded-3xl p-5">
          <div className="max-w-6xl mx-auto">
          {/*section for student body starts here */}
          <div className="flex items-start justify-start pb-7 md:pb-10 lg:pb-12">

            <div className="flex justify-end items-end gap-6">
              <p className="text-3xl md:text-5xl lg:text-7xl font-semibold font-title tracking-widest whitespace-nowrap">Student Body</p>
              <Image
                src={l11}
                alt="line"
                className="w-[190px] md:w-[250px] h-1px lg:w-[785px] lg:h-[5px]  "
                
                />
            </div>
          </div>

            {/* Row 1 */}
            <div className="flex justify-center items-center  md:flex-wrap md:gap-4 lg:flex-wrap  lg:gap-10 mt-10">
              <Image
                src={p1}
                alt="member 1"
                className="lg:w-[349px] lg:h-[343px] md:w-[150px] md:h-[155px] w-[111px] h-[109px]"
                
              />
              <Image
                src={p1}
                alt="member 2"
                className=" w-[111px] h-[109px] md:w-[150px] md:h-[155px] lg:w-[349px] lg:h-[343px]"
                
              />
              <Image
                src={p1}
                alt="member 3"
                className="lg:w-[349px] lg:h-[343px] md:w-[150px] md:h-[155px] w-[111px] h-[109px]"
                
              />
            </div>

            {/* Card row 2 */}

            <div className="flex justify-center items-center md:flex-wrap md:gap-4 lg:flex-wrap  lg:gap-10 mt-10">
              <Image
                src={p1}
                alt="member 1"
                className="lg:w-[349px] lg:h-[343px] md:w-[150px] md:h-[155px] w-[111px] h-[109px]"
                
              />
              <Image
                src={p1}
                alt="member 2"
                className=" w-[111px] h-[109px] md:w-[150px] md:h-[155px] lg:w-[349px] lg:h-[343px]"
                
              />
              <Image
                src={p1}
                alt="member 3"
                className="lg:w-[349px] lg:h-[343px] md:w-[150px] md:h-[155px] w-[111px] h-[109px]"
                
              />
            </div>

            {/*Section for student body ends here */}





            {/*tech section start here */}
            <div className="flex items-start justify-start py-7 md:py-10 lg:py-12">

            <div className="flex justify-end items-end gap-6">
            <Image
                src={l11}
                alt="line"
                className="w-[40px] lg:w-[180px] lg:h-[5px] lg:ml-3 "
                
                />
              <p className="text-3xl md:text-5xl lg:text-7xl font-semibold font-title tracking-widest">Technical</p>
              <Image
                src={l11}
                alt="line"
                className="w-[160px] md:w-[250px] h-[2px] lg:w-[663px] lg:h-[5px] lg:ml-3 "
                
                />
            </div>
          </div>

            {/*tech card 1*/}
            <div className="flex justify-center items-center md:flex-wrap md:gap-4 lg:flex-wrap  lg:gap-10 mt-10">
            <Image
                src={techpic}
                alt="member 3"
                className="lg:w-[412px] lg:h-[359px] md:w-[150px] md:h-[155px] w-[121px] h-[109px]"
                
              />
            </div>

            {/*tech card 2 n 3 */}

            <div className="flex justify-center items-center  md:flex-wrap gap-20 md:gap-40 lg:flex-wrap  lg:gap-80 mt-10">
            <Image
                src={techpic}
                alt="member 2"
                className=" w-[121px] h-[109px] md:w-[150px] md:h-[155px] lg:w-[412px] lg:h-[359px]"
                
              />
              <Image
                src={techpic}
                alt="member 3"
                className="lg:w-[412px] lg:h-[359px] md:w-[150px] md:h-[155px] w-[121px] h-[109px]"
                
              />
            </div>

            {/*Technical cards ending */}






            {/*creatives starting here  */}
            <div className="flex items-center justify-center py-7 md:py-10 lg:py-12">

            <div className="flex justify-end items-end gap-6">
            <Image
                src={l11}
                alt="line"
                className="w-[65px] md:w-[115px] lg:w-[350px] lg:h-[5px] "
                
                />
              <p className="text-3xl md:text-5xl lg:text-7xl font-semibold font-title tracking-widest">Creatives</p>
              <Image
                src={l11}
                alt="line"
                className="w-[120px] md:w-[180px] lg:w-[350px] lg:h-[5px] "
                
                />
            </div>
          </div>

            {/* roaw 1*/}
            <div className="flex justify-start items-start  md:flex-wrap gap-7 md:gap-16 lg:flex-wrap  lg:gap-60 mt-10">
              <Image
                src={crtv}
                alt="member 1"
                className="lg:w-[349px] lg:h-[343px] md:w-[150px] md:h-[155px] w-[111px] h-[109px]"
                
              />
              <Image
                src={crtv}
                alt="member 2"
                className=" w-[111px] h-[109px] md:w-[150px] md:h-[155px] lg:w-[305px] lg:h-[309px]"
                
              />
            </div>
            {/*row 2 */}
            <div className="flex justify-end items-end  md:flex-wrap gap-7 md:gap-16 lg:flex-wrap  lg:gap-60 mt-10">
              <Image
                src={crtv}
                alt="member 1"
                className=" w-[111px] h-[109px] md:w-[150px] md:h-[155px] lg:w-[305px] lg:h-[309px]"
                
              />
              <Image
                src={crtv}
                alt="member 2"
                className=" w-[111px] h-[109px] md:w-[150px] md:h-[155px] lg:w-[305px] lg:h-[309px]"
                
              />
            </div>

            {/* creatives end here */}

            



            {/* Corporate starts here */}

            <div className="flex items-center justify-center py-7 md:py-10 lg:py-20">

            <div className="flex justify-end items-end gap-6">
            <Image
                src={l11}
                alt="line"
                className="w-[100px] md:w-[170px] lg:w-[431px] lg:h-[5px] "
                
                />
              <p className="text-3xl md:text-5xl lg:text-7xl font-semibold font-title tracking-widest">Corporate</p>
              <Image
                src={l12}
                alt="line"
                className="w-[87px] md:w-[117px] lg:w-[374px] lg:h-[5px] "
                
                />
            </div>
          </div>

            {/* Row 1 */}
            <div className="flex justify-center items-center  md:flex-wrap gap-5 md:gap-10 lg:flex-wrap  lg:gap-32 mt-10">
              <Image
                src={corpic}
                alt="member 1"
                className="lg:w-[483px] lg:h-[393px] md:w-[160px] md:h-[155px] w-[131px] h-[109px]"
                
              />
              <Image
                src={corpic}
                alt="member 2"
                className=" w-[131px] h-[109px] md:w-[160px] md:h-[155px] lg:w-[483px] lg:h-[393px]"
                
              />
            </div>

            {/*Corporate sectionends here */}







            {/*Event section start here */}
            <div className="flex items-end justify-end py-7 md:py-10 lg:py-20">

                <div className="flex justify-end items-end gap-6">
                <Image
                src={l12} 
                alt="line"
                className="w-[140px] md:w-[190px] lg:w-[674px] lg:h-[5px] "
                
                />

  <div className="text-3xl md:text-5xl lg:text-7xl font-semibold font-title tracking-widest whitespace-nowrap"><p>Event Management </p></div>
</div>
</div>

            {/*Events card one */}
            <div className="flex justify-center items-center md:flex-wrap md:gap-4 lg:flex-wrap  lg:gap-10 mt-10">
            <Image
                src={evpic}
                alt="member 3"
                className="lg:w-[307px] lg:h-[344px] md:w-[150px] md:h-[155px] w-[111px] h-[109px]"
                
              />
            </div>

            {/*Events card 2 ND 3 */}

            <div className="flex justify-center items-center  md:flex-wrap gap-20 md:gap-40 lg:flex-wrap  lg:gap-80 mt-10">
            <Image
                src={evpic}
                alt="member 2"
                className=" w-[111px] h-[109px] md:w-[150px] md:h-[155px] lg:w-[307px] lg:h-[344px]"
                
              />
              <Image
                src={evpic}
                alt="member 3"
                className="lg:w-[307px] lg:h-[344px] md:w-[150px] md:h-[155px] w-[111px] h-[109px]"
                
              />
            </div>

            {/*Event cards ending */}


            
          </div>
        </div>




        {/*footer area */}
        <footer className="w-full px-4 md:px-32 py-16 border-t border-gray-200">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <Image
              src="/images/acm-logo.svg"
              alt="ACM Logo"
              width={120}
              height={120}
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
    </main>
  );
}
