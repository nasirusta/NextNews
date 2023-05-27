import Link from "next/link";
import { FaSignInAlt, FaUserAlt, FaSearch } from "react-icons/fa";

const HeaderUser = () => {
  return (
    <div className="header-users">
      <ul>
        <li lang="tr">
          <Link href="/arama" replace>
            <span className="icon">
              <FaSearch />
            </span>
          </Link>
        </li>
        <li lang="tr">
          <Link href="/login" replace>
            <span className="icon">
              <FaUserAlt />
            </span>
            <span className="title">Giriş Yap</span>
          </Link>
        </li>
        <li lang="tr">
          <Link href="/kayit" replace>
            <span className="icon">
              <FaSignInAlt />
            </span>
            <span className="title">Kayıt Ol</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderUser;
