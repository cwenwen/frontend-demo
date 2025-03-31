import { Element } from 'react-scroll';

function SectionAbout() {
  return (
    <Element name="about">
      <section
        id="about"
        className="px-4 pt-40 pb-[100px] lg:px-[150px] lg:pt-[200px]"
      >
        <h1 className="flex items-center text-center text-3xl/[110%] font-normal tracking-[-0.9px] lg:text-[75px]/[110%] lg:tracking-[-3px]">
          An emporium of local goods, all grown / baked / fabricated / assembled
          / crafted / concocted / sewn / stuffed / pickled within 100 miles of
          NYC.
        </h1>
      </section>
    </Element>
  );
}

export default SectionAbout;
