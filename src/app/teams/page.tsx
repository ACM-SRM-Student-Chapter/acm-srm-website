import Image from "next/image";
import p1 from "../../../public/images/picone.png";
import evpic from "../../../public/images/evepic.png";
import corpic from "../../../public/images/corppic.png";
import techpic from "../../../public/images/techpic.png";
import crtv from "../../../public/images/crtvpic.png";

export default function TeamsPage() {
  return (
    <main className="pt-24 px-4 md:px-32">
      <div className="max-w-[1920px] mx-auto">
        <h1 className="text-7xl md:text-8xl  lg:text-9xl  font-title font-bold text-center">Meet the Minds</h1>
        <p className="text-xl md:text-3xl pb-3 lg:text-4xl font-title text-center">
          A dynamic team shaping the future of technology, innovation, and collaboration
        </p>

        <div className="bg-[#ebe8e8] rounded-3xl p-5">
          <div className="max-w-6xl mx-auto">
          {/*section for student body starts here */}
            <div className="flex">
              <p className="text-5xl md:text-7xl lg:text-7xl font-title">Student Body</p>
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
            <div className="flex justify-end items-end ">
              <p className="text-5xl md:text-7xl lg:text-7xl pt-10 font-title ">Technical</p>
            </div>

            {/*tech c1*/}
            <div className="flex justify-center items-center md:flex-wrap md:gap-4 lg:flex-wrap  lg:gap-10 mt-10">
            <Image
                src={techpic}
                alt="member 3"
                className="lg:w-[349px] lg:h-[343px] md:w-[150px] md:h-[155px] w-[111px] h-[109px]"
                
              />
            </div>

            {/*tech card 2 n 3 */}

            <div className="flex justify-center items-center  md:flex-wrap gap-20 md:gap-40 lg:flex-wrap  lg:gap-80 mt-10">
            <Image
                src={techpic}
                alt="member 2"
                className=" w-[111px] h-[109px] md:w-[150px] md:h-[155px] lg:w-[349px] lg:h-[343px]"
                
              />
              <Image
                src={techpic}
                alt="member 3"
                className="lg:w-[349px] lg:h-[343px] md:w-[150px] md:h-[155px] w-[111px] h-[109px]"
                
              />
            </div>

            {/*Technical cards ending */}






            {/*creatives starting here  */}
            <div className="flex">
              <p className="text-5xl md:text-7xl lg:text-7xl font-title">Creatives</p>
            </div>

            {/* roaw 1*/}
            <div className="flex justify-start items-start  md:flex-wrap md:gap-4 lg:flex-wrap  lg:gap-60 mt-10">
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
            <div className="flex justify-end items-end  md:flex-wrap md:gap-4 lg:flex-wrap  lg:gap-60 mt-10">
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

            <div className="flex">
              <p className="text-5xl md:text-7xl lg:text-7xl font-title">Corporate</p>
            </div>

            {/* Row 1 techpic*/}
            <div className="flex justify-center items-center  md:flex-wrap md:gap-4 lg:flex-wrap  lg:gap-32 mt-10">
              <Image
                src={corpic}
                alt="member 1"
                className="lg:w-[483px] lg:h-[393px] md:w-[150px] md:h-[155px] w-[111px] h-[109px]"
                
              />
              <Image
                src={corpic}
                alt="member 2"
                className=" w-[111px] h-[109px] md:w-[150px] md:h-[155px] lg:w-[483px] lg:h-[393px]"
                
              />
            </div>

            {/*Corporate sectionends here */}







            {/*Event section start here */}
            <div className="flex justify-end items-end ">
              <p className="text-5xl md:text-7xl lg:text-7xl pt-10 font-title ">Event Management</p>
            </div>

            {/*Events card one */}
            <div className="flex justify-center items-center md:flex-wrap md:gap-4 lg:flex-wrap  lg:gap-10 mt-10">
            <Image
                src={evpic}
                alt="member 3"
                className="lg:w-[337px] lg:h-[374px] md:w-[150px] md:h-[155px] w-[111px] h-[109px]"
                
              />
            </div>

            {/*Events card 2 ND 3 */}

            <div className="flex justify-center items-center  md:flex-wrap gap-20 md:gap-40 lg:flex-wrap  lg:gap-80 mt-10">
            <Image
                src={evpic}
                alt="member 2"
                className=" w-[111px] h-[109px] md:w-[150px] md:h-[155px] lg:w-[337px] lg:h-[374px]"
                
              />
              <Image
                src={evpic}
                alt="member 3"
                className="lg:w-[337px] lg:h-[374px] md:w-[150px] md:h-[155px] w-[111px] h-[109px]"
                
              />
            </div>

            {/*Event cards ending */}


            
          </div>
        </div>
      </div>
    </main>
  );
}
