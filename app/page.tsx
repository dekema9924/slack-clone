import Image from "next/image";
import heroImg from '@/public/images/hero/hero_img.png'
import { Bebas_Neue } from "next/font/google";
import { Github } from 'lucide-react';
import Header from "@/components/layout/LandingPage/Header";
import Link from "next/link";
import StarryBackground from "@/components/ui/StarryBackground";
import { Info } from 'lucide-react';
import FeatureSection from "@/components/layout/LandingPage/FeatureSection";



//fonts
const BebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"]
})

export default function HomePage() {

  return (
    <>
      <StarryBackground>
        <main className=" relative min-h-screen bg-linear-to-b from-[#0b1444] via-[#2a36c7] to-[#5865f2] overflow-hidden">
          <Header />
          {/* //hero */}
          <div className="flex mt-22 flex-col-reverse lg:flex-row justify-center items-center">
            <div className=" md:w-9/12 my-2 lg:w-96  text-center lg:text-start ">
              <h1 className={` text-[4em] md:text-[5em] lg:text-[3em] mt-4 md:mt-6 leading-13 md:leading-16 font-bold ${BebasNeue.className}`}>Group chat for your Teams & Groups </h1>
              <p className="text-xl mt-2 w-11/12 m-auto ">Slax is great for team projects and communicating with your peers or even networking. Customize your own space, chat and work on group projects</p>
            </div>


            {/* hero-img */}
            <div>
              <Image
                src={heroImg}
                width={600}
                height={600}
                alt="heroImage"
                className="w-140 lg:w-full"
              />

            </div>
          </div>

          <div className=" flex md:flex-row flex-col items-center gap-4 md:w-9/12 lg:w-180 m-auto mt-10 justify-center">

            {/* <Link className="w-9/12 rounded-md  h-12 lg:h-15 lg:text-xl bg-white flex items-center justify-center gap-2 transition-colors duration-500 text-black hover:bg-gray-200"
              href={"https://github.com/dekema9924/slack-clone"}>
              <Github />
              Github
            </Link> */}

            <Link className="w-66 flex items-center justify-center rounded-md  lg:text-xl h-12 lg:h-15 bg-blue-500" href={'/auth/sign-in'}>
              Get Statrted
            </Link>

          </div>

          <section className="w-full mt-10 bg-[#0B0E14] py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-white text-5xl md:text-6xl font-black text-center mb-16 leading-tight">
                YOUR PLAYERS ARE ON<br />SLAX
              </h2>

              {/* Add grid container here */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    number: '90%+',
                    title: 'Of slax Users are students',
                    source: true
                  },
                  {
                    number: '1.9B',
                    title: 'Active users Each Month',
                    source: true,
                    hasGamepad: true
                  },
                  {
                    number: '200M+',
                    title: 'Monthly Active Users',
                    source: true
                  }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-linear-to-br from-[#5865F2] to-[#4752C4] rounded-3xl p-8 relative overflow-hidden"
                  >
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />

                    <div className="relative z-10">
                      {/* Number */}
                      <h3 className="text-white text-6xl font-black mb-6">
                        {stat.number}
                      </h3>

                      {/* Title */}
                      <p className="text-white text-xl font-bold leading-snug mb-4">
                        {stat.title}
                      </p>

                      {/* Source */}
                      {stat.source && (
                        <div className="flex items-center gap-1 text-white/70 text-sm">
                          <span>Source:</span>
                          <Info className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <FeatureSection />
        </main>
      </StarryBackground>
    </>
  );
}
