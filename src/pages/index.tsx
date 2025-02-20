import Head from "next/head";
import { Container } from "rsuite";
import Address from "@/components/Address";
import Banner from "@/components/Banner";
import IntroText from "@/components/IntroText";
import Schedules from "@/components/Schedules";
import VideoContainer from "@/components/VideoContainer";
import styles from "@/styles/Home.module.css";
import events from "@/data/events.json";

const translations = {
  pageTitle:
    "Casa de Oración Belén – Adorando a Dios desde el corazón de Bruselas",
  pageMetaDescription: "Casa de Oración Belén Bruselas",
  bannerTitle: "Casa de Oración Belén",
  bannerSubtitle: "2025: El año de la corrección",
  bannerText:
    "Únete a la comunidad cristiana de habla hispana en Bruselas, Bélgica. ¡Ven con tu familia y amigos a la familia de Dios!",
  schedulesTitle: "Horarios",
  addressTitle: "Visitanos",
  addressAddress: "Chausee de Louvain 307, 1030 Schaerbeek",
  addressMapAlt: "Mapa de la ubicacion de la iglesia",
  addressRoutesTitle: "¿Cómo llegar en transporte público?",
  addressRoutesText:
    "Puedes tomar cualquiera de las siguientes rutas y quedarte en la parada de buses DAILY",
  videoTitle: "Saludo Pastoral",
  videoAltText: "Click para ver saludo pastoral",
  socialFacebook: "https://www.facebook.com/MaisondePriereBethlehem",
  socialInstagram: "https://www.instagram.com/maison_de_priere_bethlehem/",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{translations.pageTitle}</title>
        <meta name="description" content={translations.pageMetaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <div>
        <main className={styles.main}>
          <Container>
            <Banner
              title={translations.bannerTitle}
              subtitle={translations.bannerSubtitle}
              image="/img/banner4.jpg"
              text={translations.bannerText}
            />
            <IntroText
              bannerText={translations.pageTitle}
              bannerSubtext={translations.bannerText}
              social={{
                facebook: translations.socialFacebook,
                instagram: translations.socialInstagram,
              }}
              className="container-primary"
            />
            <Schedules
              title={translations.schedulesTitle}
              events={events}
              className="container-secondary"
            />
            <Address
              title={translations.addressTitle}
              address={translations.addressAddress}
              className="container-tertiary"
              mapAlt={translations.addressMapAlt}
              mapImg="/img/map.png"
              mapLink="https://www.google.com/maps/place/Casa+de+Oraci%C3%B3n+Bel%C3%A9n/@50.8508172,4.3671904,14.63z/data=!4m14!1m7!3m6!1s0x47c3c3051f9a7ca9:0x5b582db9f8f09fbb!2sCasa+de+Oraci%C3%B3n+Bel%C3%A9n!8m2!3d50.8520104!4d4.385869!16s%2Fg%2F11h35pd13p!3m5!1s0x47c3c3051f9a7ca9:0x5b582db9f8f09fbb!8m2!3d50.8520104!4d4.385869!16s%2Fg%2F11h35pd13p?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
              routesText={translations.addressRoutesText}
              routesTitle={translations.addressRoutesTitle}
              routes={[
                { route: "29", color: "orange" },
                { route: "56", color: "yellow" },
                { route: "61", color: "yellow" },
                { route: "64", color: "red" },
              ]}
            />
            <VideoContainer
              videoId="lm2EDFrnLx0"
              header={translations.videoTitle}
              className="container-primary"
            />
          </Container>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
