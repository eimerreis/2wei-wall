import { PastMatchesResponse, Team } from "../types/PastMatchhesResponse";
import React from "react";
import pastMatches from "../test-data/past-matches.json";

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
}

const partiePointStyle: React.CSSProperties = {
    textAlign: 'center',
}

const setPointsStyleWrapper: React.CSSProperties = {
    display: 'flex',
    textAlign: 'center',
}
const setPointsStyle: React.CSSProperties = {
    display: 'block',
    padding: '6px',
    marginTop: '-24px',
    maxWidth: '80px',
}
const divSetPointsStyle: React.CSSProperties = {
    display: 'flex',
}

export const PastMatchesComponent = (props: PastMatchesResponse) => {
    const { match } = props.matches;

    if (match) {


        return (
            <div style={wrapperStyle}>
                <h1>Die letzten Spiele</h1>
                <hr />
                <div style={partieStyle}>
                    <div>
                        <TeamComponent {...match.team[0]} />
                    </div>
                    <div style={partiePointStyle}>
                        <h1>{match.results.setPoints}</h1>
                        <div style={divSetPointsStyle}>
                            <div style={setPointsStyleWrapper}>
                                {match.results.sets.set.map(set => {
                                    return (
                                        <div style={setPointsStyle}>
                                            <h2>
                                                {set.points}
                                            </h2>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div>
                        <TeamComponent {...match.team[1]} />
                    </div>
                </div>
            </div>
        )
    }
    return <React.Fragment />
}

export const PastMatchesPage = () => {
    return <PastMatchesComponent {...pastMatches} />
}