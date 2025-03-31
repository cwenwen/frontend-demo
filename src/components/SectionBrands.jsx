import { Element } from 'react-scroll';
import Divider from './Divider';

const ALPHABET_ARRAY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function BrandBlock({ title }) {
  const numberOfBrands = getRandom(3, 9);

  return (
    <div className="break-inside-avoid">
      <div className="font-ppNeueMontreal500 pt-5 pb-10">
        <h4 className="text-xl/[130%] lg:text-[31px]/[130%]">{title}</h4>
        <div className="mt-6 grid grid-cols-2 gap-2 text-[17px]/[150%] tracking-[0.17px] lg:grid-cols-1 lg:text-[19px]/[170%] lg:tracking-[0.19px]">
          {Array.from({ length: numberOfBrands }, (_, index) => (
            <p key={index} index={index} className="w-[200px]">
              Lorem Ipsum
            </p>
          ))}
        </div>
      </div>
      <Divider />
    </div>
  );
}

function SectionBrands() {
  return (
    <Element name="brands">
      <section
        id="brands"
        className="flex flex-col px-4 py-[60px] lg:flex-row lg:px-[30px]"
      >
        <h2 className="text-[55px]/[120%] tracking-[-2.2px] lg:mr-20 lg:w-[438px] lg:text-[100px]/[110%] lg:tracking-[-5px]">
          Our Brands
        </h2>
        <div className="w-full space-y-5 lg:columns-3 lg:gap-15 lg:space-y-8">
          {ALPHABET_ARRAY.map((letter) => (
            <BrandBlock key={letter} title={letter} />
          ))}
        </div>
      </section>
    </Element>
  );
}

export default SectionBrands;
