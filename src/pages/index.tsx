import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { Container, Grid, Col, Row, Text, Panel } from "rsuite";
import Banner from "@/components/Banner";
import Schedules from "@/components/Schedules";
import styles from "@/styles/Home.module.css";
import events from "@/data/events.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const translations = {
  pageTitle: "Casa de Oración Belén – Adorando a Dios desde el corazón de Bruselas",
  pageMetaDescription: "Casa de Oración Belén Bruselas",
  bannerTitle: "Casa de Oración Belén",
  bannerSubtitle: "2025: El año de la corrección",
  bannerText: "Únete a la comunidad cristiana de habla hispana en Bruselas, Bélgica. Encuentra nuestros horarios, ubicación y servicios aquí. ¡Ven con tu familia y amigos a la familia de Dios!",
  schedulesTitle: "Horarios",
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
              image="/img/banner2.jpg"
              text={translations.bannerText}
            />
            <Schedules
              title={translations.schedulesTitle}
              events={events}
              className="container-secondary"
            />
          </Container>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
