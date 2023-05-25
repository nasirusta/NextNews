import Link from "next/link";
import NavbarItems from "../data/NavbarItems";
import HeaderTop from "./HeaderTop";

const HeaderSection = () => {
  return (
    <header>
      <HeaderTop />
      <div id="header">
        <div className="container mx-auto">
          <div className="navbar">
            <nav>
              {NavbarItems.map((row, i) => (
                <li key={i} lang="tr">
                  <Link href={row.url} replace>
                    {row.title}
                  </Link>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
