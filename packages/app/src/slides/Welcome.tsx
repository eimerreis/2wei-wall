import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import WelcomePicture from "../assets/LogoButton-TollhausderLiga.png";

const Wrapper = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        height: 70%;
        object-fit: cover;
    }
`;


export const WelcomeSlide: React.FC = () => {
    return (
        <Wrapper key="welcome" initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -300, opacity: 0 }}>
            <img src={WelcomePicture} />
        </Wrapper>
    )
}