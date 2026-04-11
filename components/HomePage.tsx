'use client';

import { useRef } from 'react';
import Footer from './Footer';
import GetInTouch from './GetInTouch';
import Navber from './Navber';
import Section from './Section';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

export default function HomePage() {
  let homeRef = useRef<HTMLDivElement>(null!);
  let aboutRef = useRef<HTMLDivElement>(null!);
  let skillRef = useRef<HTMLDivElement>(null!);
  let projectRef = useRef<HTMLDivElement>(null!);
  let contactRef = useRef<HTMLDivElement>(null!);

  const sectionRefs = {
    Home: homeRef,
    About: aboutRef,
    Skills: skillRef,
    Projects: projectRef,
    Contact: contactRef,
  };

  return (
    <>
      <Navber sectionRefs={sectionRefs} />
      <Section ref={homeRef} />
      <Section2 ref={aboutRef} />
      <Section3 ref={skillRef} />
      <Section4 ref={projectRef} />
      <Section5 />
      <Section6 />
      <GetInTouch ref={contactRef} />
      <Footer />
    </>
  );
}
