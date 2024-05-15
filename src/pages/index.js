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
        <title>Nanou Services</title>
        <meta name="description" content="Des services à domicile qui simplifient votre vie - Garde d'enfants / Cuisine Maison / Entretien / Conciergerie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LayoutDefault>
        <Main>
          <PopUp isVisible={isVisiblePopUp} onClose={closePopUp}>Site internet en cours de développement</PopUp>
        </Main>
      </LayoutDefault>
    </>
  );
}