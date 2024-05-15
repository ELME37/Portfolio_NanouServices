import { GlobalStyle } from "@/assets/styles/globalStyles.styled";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}