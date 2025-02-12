import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Únete a la comunidad cristiana de habla hispana en Bruselas, Bélgica. Encuentra nuestros horarios, ubicación y servicios aquí. ¡Ven con tu familia y amigos a la familia de Dios!" />
        <meta name="keywords" content="iglesia, Iglesia Evangélica Protestante, culto, servicios religiosos, Bélgica, Comunidad Cristiana, Bruselas" />
        <meta name="author" content="Casa de oración de Belén" />
        <link rel="canonical" href="https://casadeoracionbelen.be" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
