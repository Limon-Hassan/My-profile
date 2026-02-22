import HeroScene from '../anime/HeroSence';
import HeroSence3 from '../anime/HeroSence3';
import HeroSnce2 from '../anime/HeroSnce2';
import HomePage from '../HomePage';
import Section from '../Section';

export default function HomeWrapper() {
  return (
    <main className="relative bg-[#09071e] text-white overflow-hidden">
      <HeroScene />
      <HeroSnce2 />
      <HeroSence3 />

      <div className="relative z-10">
        <HomePage />
      </div>
    </main>
  );
}
