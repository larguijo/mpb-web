import Image from "next/image";

type MapProps = {
  href: string;
  src: string;
  alt: string;
};

const MapComponent = ({ href, src, alt }: MapProps) => {
  return (
    <div className="map">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt={alt} width={400} height={300} />
      </a>
    </div>
  );
};

export default MapComponent;
