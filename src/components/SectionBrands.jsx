import Divider from './Divider';

const ALPHABET_ARRAY = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function BrandBlock({ title }) {
  const numberOfBrands = getRandom(3, 9);

  return (
    <>
      <div className="font-ppNeueMontreal500 mt-5 mb-10">
        <h4 className="text-[17px]/[150%] tracking-[0.17px]">{title}</h4>
        <div className="mt-6 grid grid-cols-2 gap-2">
          {Array.from({ length: numberOfBrands }, (_, index) => (
            <p key={index} index={index} className="w-[200px]">
              Lorem Ipsum
            </p>
          ))}
        </div>
      </div>
      <Divider />
    </>
  );
}

function SectionBrands() {
  console.log(ALPHABET_ARRAY.length);
  return (
    <section className="px-4 py-[60px]">
      <h2 className="text-[55px]/[120%] tracking-[-2.2px]">Our Brands</h2>
      <div className="grid grid-cols-1 gap-5">
        {ALPHABET_ARRAY.map((letter) => (
          <BrandBlock key={letter} title={letter} />
        ))}
      </div>
    </section>
  );
}

export default SectionBrands;
