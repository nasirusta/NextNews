import Image from "next/image";
import Link from "next/link";

const Brand = () => {
  return (
    <div className="relative w-48 h-8">
      <Link href="/" replace className="block">
        <Image unoptimized src="/img/netewLogo.png" alt="Netew Medya" fill />
      </Link>
    </div>
  );
};

export default Brand;
