import { Element } from 'react-scroll';
import LogoSvg from '../assets/locavore-logo.svg?react';

function SectionHero() {
  return (
    <Element name="hero">
      <section
        id="hero"
        className="flex h-screen flex-col items-center justify-between px-[100px] py-[70px] text-center text-xl/[130%] font-normal tracking-[-0.6px] text-nowrap uppercase lg:h-full lg:flex-row lg:py-0 lg:text-4xl/[120%] lg:tracking-[-1.44px]"
      >
        <div>
          434 6th ST
          <br />
          GREENWICH
          <br />
          VILLAGE
        </div>
        <LogoSvg className="w-[352px] lg:my-[77px] lg:w-[804px]" />
        <div>
          OPEN DAILY
          <br />
          10am-7pm
        </div>
      </section>
    </Element>
  );
}

export default SectionHero;
