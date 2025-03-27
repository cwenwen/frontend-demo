import StorefrontSvg from '../assets/tlg-storefront.svg?react';
import Button from './Button';
import Divider from './Divider';

function SectionForm() {
  return (
    <div className='px-3.5 py-5'>
      <div className='flex gap-5 flex-col py-2.5'>
        <StorefrontSvg />
        <h2 className='text-[55px]/[120%] tracking-[-2.2px] '>
          Want to be on our shelves?
        </h2>
        <p className='font-ppNeueMontreal400 text-[15px]/[160%] tracking-[0.3px]'>
          Have questions, want recommendations, or want to tell us about a small
          business you love? Reach out! If you’re a business owner featured in
          our directory, reach out with bios, images, etc. below.
        </p>
        <Divider />
      </div>
      <div>
        <form className='flex flex-col items-start gap-4 pt-2.5 font-ppNeueMontreal400 text-[15px]/[160%] tracking-[0.3px]'>
          <label className='hidden' htmlFor='name'>
            First and Last Name
          </label>
          <input
            required
            type='text'
            id='name'
            name='name'
            placeholder='First and Last Name*'
            className='w-full border-b py-3 placeholder:text-black focus:outline-none'
          />
          <label className='hidden' htmlFor='email'>
            Email
          </label>
          <input
            required
            type='email'
            id='email'
            name='email'
            placeholder='Email*'
            className='w-full border-b py-3 placeholder:text-black focus:outline-none'
          />
          <label className='hidden' htmlFor='brandName'>
            Brand Name
          </label>
          <input
            required
            type='text'
            id='brandName'
            name='brandName'
            placeholder='Brand Name*'
            className='w-full border-b py-3 placeholder:text-black focus:outline-none'
          />
          <label className='hidden' htmlFor='location'>
            Brand Name
          </label>
          <input
            required
            type='text'
            id='location'
            name='location'
            placeholder='Location*'
            className='w-full border-b py-3 placeholder:text-black focus:outline-none'
          />
          <label className='mt-3 -mb-[9px]' htmlFor='file'>
            Sell Sheet or Product Catalog*
          </label>
          <input
            id='file'
            type='file'
            name='file'
            className='w-full cursor-pointer mb-3 bg-paperWhite border border-dashed border-black rounded-lg p-5 focus:outline-none'
          />
          <label className='-mb-[9px]' htmlFor='message'>
            Message*
          </label>
          <textarea
            required
            id='message'
            name='message'
            className='w-full px-2.5 py-1.5 border rounded-[5px] min-h-[142px] focus:outline-none'
          />
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default SectionForm;
