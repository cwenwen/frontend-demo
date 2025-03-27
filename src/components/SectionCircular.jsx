import Button from './Button';

function SectionCircular() {
  return (
    <section className='flex py-10 gap-10 flex-col-reverse'>
      <div className='flex flex-col gap-10 items-center'>
        <h2 className='text-center text-[45px]/[110%] tracking-[-1.35px]'>
          This Month: Local Grill Gear, Our Favorite Sunscreen
        </h2>
        <Button>Download the Circular</Button>
      </div>
      <div>{/* Brochure */}</div>
    </section>
  );
}

export default SectionCircular;
