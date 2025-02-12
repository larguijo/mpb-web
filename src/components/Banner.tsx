import style from "@/styles/Banner.module.css";

type BannerProps = {
  title: string;
  subtitle?: string;
  image: string;
  text: string;
};

const Banner = ({ title, subtitle, image, text }: BannerProps) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className={style.banner}>
      <div className={style.bannerTextContainer}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default Banner;
