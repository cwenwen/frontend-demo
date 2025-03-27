function Nav() {
  return (
    <nav className="font-fakeReceipt bg-postItGreen sticky bottom-0 h-[53px] overflow-scroll border-y border-dashed border-black text-xs text-nowrap uppercase">
      <ul className="mx-[30px] flex h-full w-full shrink-0 items-center justify-between gap-20">
        {/* FIXME: missed margin right */}
        <li id="about">About</li>
        <li id="brands">Our Brands</li>
        <li id="month">This Month</li>
        <li id="products">Submit Products</li>
      </ul>
    </nav>
  );
}
export default Nav;
