import { FaHome } from "react-icons/fa";
import Link from "next/link";

const Breadcrumbs = ({ links = [] }) => {
  return (
    <div className="breadcrumbs">
      <div className="container mx-auto">
        <ul>
          <li>
            <Link href="/" replace>
              <FaHome size={18} />
              Anasayfa
            </Link>
          </li>
          {links.map((path, i) => {
            const isLast = i === links.length - 1;

            if (isLast) {
              return (
                <li key={i}>
                  <span>{path.name}</span>
                </li>
              );
            } else {
              return (
                <li key={i}>
                  <Link href={`/${path.url}`} replace>
                    {path.name}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
