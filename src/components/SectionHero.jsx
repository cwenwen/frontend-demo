import LogoSvg from '../assets/locavore-logo.svg?react';

function SectionHero() {
  return (
    <section className="flex h-screen flex-col items-center justify-between px-[100px] py-[70px] text-center text-xl/[130%] font-normal tracking-[-0.6px] uppercase">
      <div>
        434 6th ST
        <br />
        GREENWICH
        <br />
        VILLAGE
      </div>
      <LogoSvg className="w-[352px]" />
      <div>
        OPEN DAILY
        <br />
        10am-7pm
      </div>
    </section>
  );
}

export default SectionHero;
