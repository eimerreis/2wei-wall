import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from "@reach/router";
import io from "socket.io-client";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

import { PlayersSlide } from '../../slides/Players';
import { WelcomeSlide } from "../../slides/Welcome";
import { SponsorSlide } from "../../slides/Sponsors";

const socket = io.connect("http://localhost:3001");

type Props = RouteComponentProps & {};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  // div {
  //   position: absolute;
  // }
`

export const RenderComponent: React.FC<Props> = () => {
  const [activeSlide, setActiveSlide] = useState("sponsors");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected to websocket");
    })

    socket.on("change-slide", (payload: { slide: string }) => {
      setActiveSlide(payload.slide);
    })
  }, []);

  //todo: change slide with websocket
  const Component = () => {
    if (activeSlide === "welcome") {
      return <WelcomeSlide />
    }
    if (activeSlide === "players") {
      return <PlayersSlide />
    }
    if (activeSlide === "sponsors") {
      return <SponsorSlide />
    }
  }

  console.log(activeSlide);
  return (
    <Wrapper>
      <AnimatePresence>
        {Component()}
      </AnimatePresence>
    </Wrapper>
  );
};
