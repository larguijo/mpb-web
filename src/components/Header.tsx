import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import style from "@/styles/Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link href="/">
          <Image
            alt="Casa de Oracion Belen"
            src="/img/logo-full-color.png"
            width={64}
            height={53}
          />
        </Link>
      </div>
      <div className={style.navigation}>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
