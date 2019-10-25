import React from "react";
import homeGame from "../test-data/next-home-game.json";
import { HomeGameResponse } from "../types/HomeGameResponse";

export const NextHomeGameComponent = (props: HomeGameResponse) => {
    const wrapperStyle: React.CSSProperties = {
        fontFamily: 'Roboto',
        height: "100%",
        width: "90%",
        overflow: "hidden",
        marginLeft: '5%',
    }
    const gegenStyle: React.CSSProperties = {
        margin:'-15px 0 -15px',
        color:'#4d4d4d'
    }
    const OpponentStyle: React.CSSProperties = {
        fontSize:'48px',
    }
    return (
        <div style={wrapperStyle}>
            <h1>Unser nächstes Spiel</h1>
            <hr/>
           <h1>{props.date +", "+ props.time}</h1> 
           <h3 style={gegenStyle}>gegen</h3> 
           <h1 style={OpponentStyle}>{props.team[1].name}</h1> 
        </div>
    )
}

export const NextHomeGamePage = () => {
    return <NextHomeGameComponent {...homeGame} />
}
