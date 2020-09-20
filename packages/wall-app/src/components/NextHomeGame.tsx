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
    const versusStyle: React.CSSProperties = {
        margin: '-15px 0 -15px',
        fontSize: "4rem",
        textAlign: "center",
    }
    const OpponentStyle: React.CSSProperties = {
        fontSize: "9rem",
        textAlign: "center",
    }

    const dateStyle: React.CSSProperties = {
        textAlign: "center",
        fontSize: "9rem"
    }

    const titleStyle: React.CSSProperties = {
        textAlign: "center",
        fontSize: "4rem",
        textTransform: "uppercase",
        letterSpacing: "2.5px",
        fontWeight: "normal",
        paddingBottom: "32px",
        borderBottom: "4px solid rgba(0,0,0,0.08)"
    }

    return (
        <div style={wrapperStyle}>
            <h1 style={titleStyle}>nächstes Heimspiel</h1>
            <h1 style={dateStyle}>{props.date + ", " + props.time}</h1>
            <h3 style={versusStyle}>vs.</h3>
            <h1 style={OpponentStyle}>{props.team[1].name}</h1>
        </div>
    )
}

export const NextHomeGamePage = () => {
    return <NextHomeGameComponent {...homeGame} />
}
