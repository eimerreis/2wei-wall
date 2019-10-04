import { PastMatchesResponse, Team } from "../types/PastMatchhesResponse";
import React from "react";

import pastMatches from "../test-data/past-matches.json";

const TeamComponent = (team: Team) => {
    return <h3>{team.name}</h3>;
}

export const PastMatchesComponent = (props: PastMatchesResponse) =>{ 
    const { match } = props.matches;
    return (
        <div>
            {match.team.map(x => {
                return <TeamComponent {...x} />
            })}
        </div>
    )
}

export const PastMatchesPage = () => {
    return <PastMatchesComponent {...pastMatches} />
}