import React from "react";

interface Player {
    name: string;
    position: string;
    age: number;
}

export const PlayerComponent = (props: Player) => {
    

    return ( 
        <div>
            {props.name}
        </div>
    )
}

export const PlayerPage = () => {
    const player: Player = {
        name: "Robin Leber",
        position: "Außen",
        age: 21
    }
    return (
        <PlayerComponent  {...player} />
    )
}