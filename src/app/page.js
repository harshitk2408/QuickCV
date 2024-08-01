import Image from "next/image";
import Form from "@/components/Form";
import Steps from "@/components/Steps";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="bg-black">
      <Hero/>
      <div className="form flex flex-col items-center pl-[5%] pr-[5%]">
        <Steps/>
        <Form/>
      </div>
    </div>
  );
}
