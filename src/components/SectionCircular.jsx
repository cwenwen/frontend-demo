import { Element } from 'react-scroll';
import Button from './Button';
import CircularIconSvg from '../assets/circular-icon.svg?react';

function SectionCircular() {
  return (
    <Element name="circular">
      <section
        id="circular"
        className="flex flex-col-reverse gap-10 px-4 py-16 lg:flex-row lg:py-20"
      >
        <div className="flex flex-col items-center gap-10 lg:basis-1/2 lg:items-start lg:justify-center">
          <h2 className="text-center text-[45px]/[110%] tracking-[-1.35px] lg:text-start lg:text-[75px]/[110%] lg:tracking-[-3px]">
            This Month: Local Grill Gear, Our Favorite Sunscreen
          </h2>
          <Button>Download the Circular</Button>
        </div>
        <div className="flex justify-center lg:basis-1/2">
          <div className="relative inline-block perspective-distant">
            <div className="h-[432px] w-[280px] transform-[rotate(-7.3deg)] transform-3d lg:h-[718px] lg:w-[448px]">
              <div className="h-full w-full hover:transform-[rotateY(180deg)] active:transform-[rotateY(180deg)]">
                <img
                  src="src/assets/circular.png"
                  alt="Front side"
                  className="absolute h-full w-full border border-dashed backface-hidden"
                />
                <img
                  src="src/assets/circular.png"
                  alt="Back side"
                  className="absolute h-full w-full transform-[rotateY(180deg)] border border-dashed backface-hidden"
                />
              </div>
            </div>
            <CircularIconSvg className="absolute bottom-[100px] left-[-16px] z-10 w-[44px] lg:bottom-[244px] lg:left-[-32px] lg:w-[78px]" />
            <div className="font-fakeReceipt absolute bottom-[48px] left-[-36px] text-sm/[132%] text-black uppercase lg:bottom-[256px] lg:left-[-96px] lg:text-base/[132%]">
              flip
              <br />
              over
              <br />
              FOR
              <br />
              MORE!
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default SectionCircular;
