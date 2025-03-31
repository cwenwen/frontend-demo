import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const NAV_ITEMS = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'brands',
    title: 'Our Brands',
  },
  {
    id: 'circular',
    title: 'This Month',
  },
  {
    id: 'form',
    title: 'Submit Products',
  },
];

function Nav() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          } else {
            setActive('');
          }
        });
      },
      { threshold: 0.6 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="font-fakeReceipt bg-postItGreen sticky bottom-0 h-[53px] overflow-scroll border-y border-dashed border-black text-xs text-nowrap uppercase">
      <ul className="border-box flex h-full w-full items-center justify-between gap-20 px-3.5">
        {NAV_ITEMS.map(({ id, title }) => (
          <li key={id} className="first:pl-4 last:pr-4">
            <Link
              className={`cursor-pointer border-dashed hover:border-b hover:border-black ${
                active === id
                  ? 'border-b border-black'
                  : 'border-b border-transparent'
              }`}
              to={id}
              smooth={true}
              duration={300}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;
