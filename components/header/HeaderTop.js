import Link from "next/link";
import TopMenu from "../data/TopMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import Brand from "./Brand";
import HeaderUser from "./HeaderUser";

const HeaderTop = () => {
  return (
    <div className="HeaderTop">
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between text-white">
          <div className="flex items-center justify-between flex-1 gap-10">
            <div className="flex items-center gap-14">
              <button type="button">
                <GiHamburgerMenu size={26} />
              </button>
              <Brand />
            </div>
            <ul className="HeaderTopMenu">
              {TopMenu.map((menu, i) => (
                <li key={i}>
                  <Link href={menu.url} replace>
                    {menu.icon}
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <HeaderUser />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
