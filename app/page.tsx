import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    
    <main className="w-full h-max">
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
    </main>
  );
}


