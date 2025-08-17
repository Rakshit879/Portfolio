import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    
    <main className="w-full h-max">
      <Navbar/>
      <Hero/>
    </main>
  );
}


