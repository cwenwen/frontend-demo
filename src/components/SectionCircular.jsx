import { Element } from 'react-scroll';
import Button from './Button';

function SectionCircular() {
  return (
    <Element name="circular">
      <section
        id="circular"
        className="flex flex-col-reverse gap-10 px-4 py-10 lg:flex-row"
      >
        <div className="flex flex-col items-center gap-10 lg:basis-1/2 lg:items-start">
          <h2 className="text-center text-[45px]/[110%] tracking-[-1.35px] lg:text-start lg:text-[75px]/[110%] lg:tracking-[-3px]">
            This Month: Local Grill Gear, Our Favorite Sunscreen
          </h2>
          <Button>Download the Circular</Button>
        </div>
        <div className="lg:basis-1/2">{/* Brochure */}</div>
      </section>
    </Element>
  );
}

export default SectionCircular;
