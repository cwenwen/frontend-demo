import LogoSvg from '../assets/locavore-logo.svg?react';

function SectionHero() {
  return (
    <section className='flex justify-between font-normal text-center tracking-[-0.6px] text-xl/[130%] items-center py-[70px] px-[100px] flex-col h-screen uppercase'>
      <div>
        434 6th ST
        <br />
        GREENWICH
        <br />
        VILLAGE
      </div>
      <LogoSvg className='w-[352px]' />
      <div>
        OPEN DAILY
        <br />
        10am-7pm
      </div>
    </section>
  );
}

export default SectionHero;
