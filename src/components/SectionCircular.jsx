import { Element } from 'react-scroll';
import Button from './Button';

function SectionCircular() {
  return (
    <Element name="circular">
      <section id="circular" className="flex flex-col-reverse gap-10 py-10">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-center text-[45px]/[110%] tracking-[-1.35px]">
            This Month: Local Grill Gear, Our Favorite Sunscreen
          </h2>
          <Button>Download the Circular</Button>
        </div>
        <div>{/* Brochure */}</div>
      </section>
    </Element>
  );
}

export default SectionCircular;
