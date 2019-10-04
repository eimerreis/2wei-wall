import { PastMatchesResponse, Team } from "../types/PastMatchhesResponse";
import React from "react";

import pastMatches from "../test-data/past-matches.json";
import { flex, bottom } from "styled-system";

const TeamComponent = (team: Team) => {
    return <h1 style={partieTeamStyle}>{team.name}</h1>;
}
const wrapperStyle: React.CSSProperties = {
    fontFamily: 'Roboto',
    height: "100%",
    width: "90%",
    overflow: "hidden",
    marginLeft: '5%',
}
const partieStyle: React.CSSProperties = {
    display: 'flex',
}
const partieTeamStyle: React.CSSProperties = {
    width: '40%',
}

const partiePointStyle: React.CSSProperties = {
    width: '20%',
    display:'flex',
    marginLeft:'10%'
}

const pointStyles: React.CSSProperties = {
    marginRight:'10px',

}
const setPointsStyle: React.CSSProperties = {
    marginLeft:'10px'
}
const divSetPointsStyle: React.CSSProperties = {
    display:'flex',
    marginTop:'-30px',
    marginLeft:'33%'
}

export const PastMatchesComponent = (props: PastMatchesResponse) =>{ 
    const { match } = props.matches;
    return (
        <div style={wrapperStyle}>
            <h1>Die letzten Spiele</h1>
            <hr/>
            <div style={partieStyle}>
                <h1 style={partieTeamStyle}>
                    {match.team[0].name}
                </h1>
                <div style={partiePointStyle}>
                <h1 style={pointStyles}>{match.results.setPoints}</h1>
                </div>
                <h1 style={partieTeamStyle}>
                    {match.team[1].name}
                </h1>
            </div>
            <div style={divSetPointsStyle}>
                    {match.results.sets.set.map(set =>{
                        return (
                            <h2 style={setPointsStyle}>
                                {set.points}
                            </h2>
                        )
                    })}
            </div>
        </div>
    )
}

export const PastMatchesPage = () => {
    return <PastMatchesComponent {...pastMatches} />
}