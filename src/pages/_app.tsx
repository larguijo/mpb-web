import 'rsuite/dist/rsuite.min.css';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Container } from "rsuite";
import Header from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  );
}
