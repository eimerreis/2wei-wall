import React from "react";

import { TableResponse } from "./Table.types";
import data from "../test-data/table.json";
import { Redirect } from "react-router";


export const TableComponent = (props: TableResponse) => {
    const tvrStyle: React.CSSProperties = {
        fontFamily: 'Roboto',
        display: 'flex',
        height: "60px",
        width: "100%",
        overflow: "hidden",
        backgroundColor: 'red',
    }

    const titleStyle: React.CSSProperties = {
        fontFamily: 'Roboto',
        display: 'flex',
        height: "60px",
        width: "100%",
        overflow: "hidden",
        marginLeft: '40px'
    }

    const unColoredStyle: React.CSSProperties = {
        fontFamily: 'Roboto',
        display: 'flex',
        height: "58px",
        width: "100%",
        overflow: "hidden",
    }
    const coloredWrapperStyle: React.CSSProperties = {
        fontFamily: 'Roboto',
        display: 'flex',
        height: "58px",
        width: "100%",
        overflow: "hidden",
        backgroundColor: 'rgb(229, 229, 229)',
    }

    const rowStyle: React.CSSProperties = {
        fontSize: "32px"
        
    }

    const tablePosStyle: React.CSSProperties = {
        width: "50px",
        marginLeft: '20px'
    }
    const tablePosStyletvr: React.CSSProperties = {
        width: "50px",
        marginLeft: '20px',
        color:'red'
    }
    const teamNameStyle: React.CSSProperties = {
        width: "350px"
    }
    const teamNameStyletvr: React.CSSProperties = {
        width: "350px",
        color:'red'
    }

    const tableInfoStyle: React.CSSProperties = {
        width: "100px"
    }
    const tableInfoStyletvr: React.CSSProperties = {
        width: "100px",
        color:'red'
    }
    const nada: React.CSSProperties = {
        
    }
    const { ranking } = data.rankings;
    return (
         <div>
            <div style={titleStyle}>
                    <h1 style={teamNameStyle}>Team</h1>
                    <h1 style={tableInfoStyle}>Sp</h1>
                    <h1 style={tableInfoStyle}>Sätze</h1>
                    <h1 style={tableInfoStyle}>Gew</h1>
                    <h1 style={tableInfoStyle}>Pkt</h1>
                </div>
                <hr/>
            {ranking.map((rank, index) => {  
                const isColored = index % 2;  
                const isTVR = rank.team.name === 'TV Rottenburg II'           
                return(

                    <div style={isColored ? unColoredStyle : coloredWrapperStyle}>
                        
                            <h2 style={isTVR ? tablePosStyletvr : tablePosStyle}>{rank.place} </h2>
                            <h2 style={isTVR ? teamNameStyletvr : teamNameStyle}>{rank.team.name}</h2>
                            <h2 style={isTVR ? tableInfoStyletvr: tableInfoStyle}>{rank.matchesPlayed}</h2>
                            <h2 style={isTVR ? tableInfoStyletvr: tableInfoStyle}>{rank.setPoints}</h2>
                            <h2 style={isTVR ? tableInfoStyletvr: tableInfoStyle}>{rank.wins}</h2>
                            <h2 style={isTVR ? tableInfoStyletvr: tableInfoStyle}>{rank.points}</h2>
                        
                    </div>
                )
            })}
        </div> 
    ) 
}

export const TablePage = () => {
    const tableResponse = data as TableResponse;
    return (
        <TableComponent {...tableResponse} />
    )
}