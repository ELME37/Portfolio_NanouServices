  import React, {useState} from "react";
  import Head from "next/head";

  import LayoutDefault from "@/containers/layout";
  import PopUp from "@/components/popUp";

  import { Main } from "@/assets/styles/main.styled";

  export default function Home() {
    const [isVisiblePopUp, setIsVisiblePopUp] = useState (true)

    const closePopUp = () => {
        setIsVisiblePopUp(false);
    };
    return (
      <>
        <Head>
          <title>Nanou Services - Services à domicile : Garde d&aposenfants / Cuisine Maison / Femme de ménage / Conciergerie sur les secteurs de Nivillac et alentours</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Des services à domicile qui simplifient votre vie - Garde d'enfants / Cuisine Maison / Femme de ménage / Conciergerie sur les secteurs de Nivillac et alentours notamment sur La Roche-Bernard, Herbignac, Pénestin, Muzillac, département du Morbihan" />
          <meta name="keywords" content="services à domicile, garde d'enfants, cuisine maison, femme de ménage, conciergerie, Nivillac, La Roche-Bernard, Herbignac, Pénestin, Muzillac, Morbihan" />
          <meta name="author" content="Nanou Services" />
          <meta property="og:title" content="Nanou Services - Services à domicile" />
          <meta
            property="og:description"
            content="Des services à domicile qui simplifient votre vie - Garde d'enfants, Cuisine Maison, Femme de ménage, Conciergerie"
          />
          <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Nanou Services",
              "description": "Des services à domicile qui simplifient votre vie - Garde d'enfants, Cuisine Maison, Femme de ménage, Conciergerie",
              "url": "https://www.nanou-services.fr",
              "logo": "https://www.nanou-services.fr/assets/images/logo Nanou.png",
              "address": [
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Nivillac",
                  "addressCountry": "FR"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "La Roche-Bernard",
                  "addressCountry": "FR"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Herbignac",
                  "addressCountry": "FR"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Muzillac",
                  "addressCountry": "FR"
                },
                {
                  "@type": "PostalAddress",
                  "addressLocality": "Pénestin",
                  "addressCountry": "FR"
                }
              ]
            }
            `}
          </script>
          
        </Head>
        <LayoutDefault>
          <Main>
            <PopUp isVisible={isVisiblePopUp} onClose={closePopUp}>Site internet en cours de développement</PopUp>
          </Main>
        </LayoutDefault>
      </>
    );
  }