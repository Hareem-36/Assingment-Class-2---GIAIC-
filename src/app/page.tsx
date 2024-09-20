import Image from "next/image";
import profile from "../../.next/image/portfolio-4.jpg";

export default function Home() {
  return (
    <>
      <div className="bg-black flex justify-center items-center h-[500px]">
        <div className="w-[800px] h-[400px] m-[30px] text-white-400 font-bold text-[50px] pl-[10px] nl-[20px]">
          Hy,
          <br />
          I am <span>Hareem Jaweid</span>
          <br />
          <h2>
            I am <span>"Frontend Developer"</span>
          </h2>
          <br />
          <p className="text-[30px]">
            I am currently enrolled in quarter 2, I have completed HTML, CSS,
            JavaScript, and TypeScript. Now I am learning Next.js from{" "}
            <span>Governorhouse, Karachi.</span>
          </p>
        </div>

        <div className="h-[1000px] w-[500px] flex justify-center mt-20 items-center">
          <Image
            src={profile}
            alt="profile pic"
            width={400} 
            height={400} 
            className="rounded-full" // Optional: make it a circle if you want
          />
        </div>
      </div>
    </>
  );
}
