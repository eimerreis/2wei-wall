import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
    height: 100vh;

    font-family: 'Corporate Serif';
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    flex-flow: row wrap;
    overflow: hidden;
`;

const Versus = styled.h3`
    font-size: 11rem;
    width: 100%;
    text-align: center;
    margin: 0;
`;


const HomeTeam = styled.h1`
    font-size: 11rem;
    margin: 0;
`;

const GuestTeam = styled.h1`
    font-size: 11rem;
    font-family: 'Corporate Serif';
    margin: 0;
`;

export const Home = () =>
    <Wrapper key="home" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }}>
        <HomeTeam>TV Rottenburg</HomeTeam>
        <Versus>vs.</Versus>
        <GuestTeam>TSG Blankenloch</GuestTeam>
    </Wrapper>