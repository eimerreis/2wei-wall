import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import Finn from "../assets/players/Finn.jpg";
import Hannes from "../assets/players/Hannes.jpg";
import Jonas from "../assets/players/Jonas.jpg";
import Kai from "../assets/players/Kai.jpg";
import Niklas from "../assets/players/Niklas.jpg";
import Robin from "../assets/players/Robin.jpg";
import TimoB from "../assets/players/TimoB.jpg";
import TimoK from "../assets/players/TimoK.jpg";
import Vincent from "../assets/players/Vincent.jpg";
import Yannick from "../assets/players/Yannick.jpg";
import Mo from "../assets/players/Mo.jpg";
import Fred from "../assets/players/Fred.jpg";
import Jan from "../assets/players/Jan.jpg";
import Felix from "../assets/players/Felix.jpg";
import Steve from "../assets/players/Steve.jpg";
import Markus from "../assets/players/Markus.jpg";

const Image = styled(motion.img)`
    height: 100vh;
    object-fit: cover;
`;

const Players = [
    Robin,
    Mo,
    Jonas,
    Niklas,
    Steve,
    TimoK,
    Yannick,
    Hannes,
    Fred,
    Markus,
    Kai,
    Finn,
    Vincent,
    TimoB,
    Felix,
    Jan
]

const PlayerData = [
    {
        "name": "Robin Leber",
        "number": 11,
        "age": 22,
        "position": "Außen",
        "image": "http://127.0.0.1:3002/players/Robin.jpg"
    },
    {
        "name": "Moritz Frölich",
        "number": 15,
        "age": 25,
        "position": "Außen",
        "image": "http://127.0.0.1:3002/players/Moritz.jpg"
    },

    {
        "name": "Jonas Kuhn",
        "number": 17,
        "age": 21,
        "position": "Zuspiel",
        "image": "http://127.0.0.1:3002/players/Jonas.jpg"
    },
    {
        "name": "Niklas Lichtenauer",
        "number": 8,
        "age": 19,
        "position": "Diagonal",
        "image": "http://127.0.0.1:3002/players/Niklas.jpg"
    },
    {
        "name": "Steve Mäder",
        "number": 1,
        "age": 25,
        "position": "Mittelblock",
        "image": "http://127.0.0.1:3002/players/Steve.jpg"
    },
    {
        "name": "Timo Kilgus",
        "number": 7,
        "age": 25,
        "position": "Mittelblock",
        "image": "http://127.0.0.1:3002/players/TimoKilgus.jpg"
    },
    {
        "name": "Yannick Menke",
        "number": 12,
        "age": 20,
        "position": "Mittelblock",
        "image": "http://127.0.0.1:3002/players/Yannick.jpg"
    },
    {
        "name": "Hannes Elsäßer",
        "number": 16,
        "age": 26,
        "position": "Libero",
        "image": "http://127.0.0.1:3002/players/Hannes.jpg"
    },
    {
        "name": "Fred Nagel",
        "number": 6,
        "age": 27,
        "position": "Mittelblock",
        "image": "http://127.0.0.1:3002/players/Fred.jpg"
    },
    {
        "name": "Markus Hieber",
        "number": 5,
        "age": 19,
        "position": "Außen",
        "image": "http://127.0.0.1:3002/players/Markus.jpg"
    },
    {
        "name": "Kai Wolf",
        "number": 9,
        "age": 17,
        "position": "Außen",
        "image": "http://127.0.0.1:3002/players/Kai.jpg"
    },
    {
        "name": "Finn Dostal",
        "number": 23,
        "age": 18,
        "position": "Außen",
    },
    {
        "name": "Vincent Wachendorfer",
        "number": 5,
        "age": 18,
        "position": "Diagonal",
        "image": "http://127.0.0.1:3002/players/Vincent.jpg"
    },
    {
        "name": "Timo Baur",
        "number": 18,
        "age": 27,
        "position": "Zuspiel",
        "image": "http://127.0.0.1:3002/players/TimoBaur.jpg"
    },
    {
        "name": "Felix Weber",
        "age": 30,
        "position": "Co-Trainer",
        "image": "http://127.0.0.1:3002/players/Felix.jpg"
    },
    {
        "name": "Jan Scheuermann",
        "age": 22,
        "position": "Trainer",
        "image": "http://127.0.0.1:3002/players/Jan.jpg"
    }
];

const Wrapper = styled(motion.div)`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

type PlayerType = {
    name: string;
    age: number;
    position: string;
}

const ImageWrapper = styled.div`
    width: 50vw;
`

export const PlayersSlide = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (activeIndex === (Players.length - 1)) {
                setActiveIndex(0)
            } else {
                setActiveIndex(activeIndex + 1);
            }
        }, 6000);
        return (() => clearInterval(interval));
    })

    return (
        <Wrapper>
            <ImageWrapper>
                <AnimatePresence>
                    <Image
                        key={activeIndex}
                        src={Players[activeIndex]}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                    />
                </AnimatePresence>
            </ImageWrapper>
            <Player {...PlayerData[activeIndex]} />
        </Wrapper>
    )
}

const PlayerWrapper = styled(motion.div)`
    font-size: 3rem;
    font-family: Corporate Serif;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: row wrap;

    h1 {
        text-align: center;
    }
`;

const Name = styled(motion.h1)`
    border-bottom: 3px solid #000;
    margin-bottom: 12px;
`;

const Position = styled(motion.h1)`
    margin-top: 0px;
    width: 100%;
    text-align: center;
`;

const Player: React.FC<PlayerType> = (player) => {

    return (
        <AnimatePresence>
            <PlayerWrapper>
                <Name>{player.name}</Name>
                <Position>{player.position}</Position>
            </PlayerWrapper>
        </AnimatePresence>
    )
}