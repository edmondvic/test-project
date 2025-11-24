import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="pt-32">
      <Hero />
      <Features />
      <Pricing />
      <Contact />
    </main>
  );
}