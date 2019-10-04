import React from "react";
import homeGame from "../test-data/next-home-game.json";
import { HomeGameResponse } from "../types/HomeGameResponse";

export const NextHomeGameComponent = (props: HomeGameResponse) => {
    return (
        <div>
           <h1>{props.date}</h1> 
           <h1>gegen</h1> 
           <h1>{props.team[1].name}</h1> 
        </div>
    )
}

export const NextHomeGamePage = () => {
    return <NextHomeGameComponent {...homeGame} />
}