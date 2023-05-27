import Link from "next/link";
import NavbarItems from "../data/NavbarItems";
import HeaderTop from "./HeaderTop";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const HeaderSection = () => {
  return (
    <header>
      <HeaderTop />
      <div id="header">
        <div className="container mx-auto">
          <div className="navbar">
            <li className="mr-7 lg:mr-10">
              <button type="button" className="flex flex-col justify-end">
                <GiHamburgerMenu size={22} />
              </button>
            </li>
            <nav>
              {NavbarItems.map((row, i) => (
                <li key={i} lang="tr">
                  <Link href={row.url} replace>
                    {row.title}
                  </Link>
                </li>
              ))}
              <li lang="tr">
                <Link href="/arama" replace>
                  <FaSearch />
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
