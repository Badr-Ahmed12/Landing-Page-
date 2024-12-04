import { Link } from 'react-router-dom';

function Nav() {
  const navItems = ["Home", "About", "Team", "Contact"];

  return (
    <nav className="bg-gray-800 sticky top-0 z-50 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="font-bold text-3xl uppercase">
          <span className="text-amber-500 hover:text-white transition duration-300">LOGO</span>
        </Link>
        <ul className="flex gap-8 uppercase font-semibold text-white">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-amber-500 transition duration-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

