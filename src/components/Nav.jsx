function Nav() {
  return (
    <nav className='font-fakeReceipt bg-postItGreen sticky bottom-0 uppercase h-[53px] border-y border-dashed border-black text-nowrap text-xs overflow-scroll'>
      <ul className='flex shrink-0 justify-between items-center h-full w-full mx-[30px] gap-20'>
        {/* FIXME: missed margin right */}
        <li id='about'>About</li>
        <li id='brands'>Our Brands</li>
        <li id='month'>This Month</li>
        <li id='products'>Submit Products</li>
      </ul>
    </nav>
  );
}
export default Nav;
