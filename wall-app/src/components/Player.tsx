import React from "react";

export interface Player {
    name: string;
    number: number;
    rangerName: string;
    position: string;
    age: number;
    memberSince: number;
    image: string;
}
export const PlayerComponent = (props: Player) => {
    const playerNameStyle: React.CSSProperties = {
        textTransform: "uppercase",
        letterSpacing: "1.2px",
    }

    const wrapperStyle: React.CSSProperties = {
        fontFamily: 'Roboto',
        display: "flex",
        height: "100%",
        width: "100%",
        overflow: "hidden"
    }

    const horizontalRuleStyle: React.CSSProperties = {
        border: "1px solid rgba(0,0,0,0.095)",
    }

    const divStyle: React.CSSProperties = {
        padding: "24px",
        float: "left",
    }

    return (
        <div style={wrapperStyle}>
            <img style={divStyle} src={props.image} alt="Player Picture" width="50%" height="50%"></img>
            <div style={divStyle}>
                <h1 style={playerNameStyle}>{props.name}</h1>
                <hr style={horizontalRuleStyle} />
                <h2>{props.rangerName} | #{props.number}</h2>
                <hr style={horizontalRuleStyle} />
                <h2>Position: {props.position}</h2>
                <h2>Alter: {props.age}</h2>
                <h2>Im Team seit: {props.memberSince}</h2>
            </div>
        </div>
    )
}

export const PlayerPage = () => {
    const player: Player = {
        name: "Robin Leber",
        number: 11,
        rangerName: "Bumsi-Ranger",
        position: "Außen",
        age: 21,
        memberSince: 2016,
        image: "https://lh3.googleusercontent.com/KFahNPb8Ue5joGmB7BntnePEts_aufmR2bJaqRTwx_qznCTGmf0Uxn0XyHl0L2cBQb70OlIoqGcSSMvJ6oSaPBK-5VovICPIvmtxOV64Exao_ii4SpXy62a2NhROfs--Nd706UjSaDcwgcCB92Uc4YTewXGvieuY17S3Z981khCks7GKWITVSvTlESiNoJEaIpNRNbUQPGMF5OUbHjwJkJhSD5GCfLf4TNrnCo_5lZ5_xeAd3CGDfzdGZ6chmMas4TGhir1EozRyR7YcBb9o46Xnlrw4KAU79WRrPOIXL6FHiEfFnk_0UFR50spNriEuJBUW0k2KMbQZ_30ZeFspxUivMGYIUEFawWx40EnYKpIfw_uiKF0q5AQfMWEgaGHesUhhcg0tlkbbcN_PhW-2XCj3n5a0chiJk5aML03fzPdu0BeJDtd-2TQcNz2LronkU8p8HtsUKYToarSEEMCPVLFIhuU9gSNun6GHq0HS3a5-Wc_psAIZ8hg6Ty5DHEbdaSfoVLdo98ECP37XrjvTnwixLd7It1famHBCvjlTalCAHhPYNzHC-o-CU6GScnys1VWUgwWbGlTpXed8P-6xsVMu7kPFoyiHec-EC_HefgoZTy7s9YQlI0VxGBlNIHML9Jj6m3U26nQrUsmlY8njvyo_nzuneLg2-MLk0S5-Gid5av1C8MLMBDGm6EQ3bULyIEE8bD2rEWWWBmRmya4kuDtey0_kHFYmbao8UT_F3fvHifg=w1364-h1540-no"
    }

    return (
        <PlayerComponent  {...player} />
    )
}