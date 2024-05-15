import React from 'react'

import { Root, ContainerGlobal, ContainerNews, SpanPopUp, TextPopUp, Svg } from './popUp.styled'

export default function PopUp ( { children, isVisible, onClose }) {
    if (!isVisible) return null;
  return (
    <Root>
        <ContainerGlobal>
            <ContainerNews>
                <SpanPopUp>News</SpanPopUp>
                <TextPopUp>{children}</TextPopUp>
            </ContainerNews>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" onClick={onClose}>
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
            </Svg>
        </ContainerGlobal>
    </Root>
  )
}