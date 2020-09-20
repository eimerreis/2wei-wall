import React from "react";
import { Sponsors } from "../assets/Sponsors";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const SponsorName = styled(motion.h1)`
    font-family: Corporate Serif;
    font-size: 7rem;
    width: 100%;
    text-align: center;

    position: absolute;
    top: 300px;
`;

const Thanks = styled.h1`
    font-family: Corporate Serif;
    font-size: 5rem;
    width: 100%;
    text-align: center;

    position: absolute;
    top: 50px;
`;

export const SponsorSlide: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (activeIndex === (Sponsors.length - 1)) {
                setActiveIndex(0)
            } else {
                setActiveIndex(activeIndex + 1);
            }
        }, 3000);

        return (() => { clearInterval(interval) });
    })

    return (
        <AnimatePresence>
            <Thanks>Wir bedanken uns bei</Thanks>
            {!(activeIndex % 2) && (
                <SponsorName
                    key={activeIndex}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                >{Sponsors[activeIndex]}</SponsorName>
            )}
            {(activeIndex % 2) && (
                <SponsorName
                    key={activeIndex}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                >{Sponsors[activeIndex]}</SponsorName>)}
        </AnimatePresence>
    )
}