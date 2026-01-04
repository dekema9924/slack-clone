import Image from "next/image";
import heroImg from '@/public/images/hero/hero_img.png'
import { Bebas_Neue } from "next/font/google";
import Button from "@/components/ui/Button";



//fonts
const BebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"]
})

export default function HomePage() {

  return (
    <>
      <main className="mt-22">
        {/* //hero */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div className=" md:w-66 my-2 w-80 text-center md:text-start ">
            <h1 className={` text-[3em] leading-12 font-bold ${BebasNeue.className}`}>Group chat for your Teams & Groups </h1>
            <p className="">Slax is great for team projects and communicating with your peers or even networking. Customize your own space, chat and work on group projects</p>
          </div>


          {/* hero-img */}
          <div>
            <Image
              src={heroImg}
              width={500}
              height={500}
              alt="heroImage"
              className="w-96 lg:w-full"
            />

          </div>
        </div>

        <div className=" flex md:flex-row flex-col items-center gap-4 w-10/12 m-auto mt-10 justify-center">
          <Button
            text="Github"
            className="w-66 h-12 bg-white transition-colors duration-500 text-black hover:bg-gray-200"
          />
          <Button
            text="Sign into your Account"
            className="w-66 h-12 bg-blue-500"
          />

        </div>

      </main>
    </>
  );
}
