import Link from "next/link";
import TopMenu from "../data/TopMenu";
import Brand from "./Brand";
import HeaderUser from "./HeaderUser";

const HeaderTop = () => {
  return (
    <div className="HeaderTop">
      <div className="container mx-auto">
        <div className="w-full flex flex-col sm:flex-row items-center gap-4">
          <Brand />
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
          <HeaderUser />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
