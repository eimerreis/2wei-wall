import React from "react";

interface Player {
    name: string;
    number: number;
    rangerName: string;
    position: string;
    age: number;
    memberSince: number;
    image: string;
}

export const PlayerComponent = (props: Player) => {

    const TVRLogo= "https://www.volleyball-rottenburg.de/media/cropped-TVR-Volleyball-Logo-Sqaure.png";
    const H2weiLogo= "data:image/jpeg;base64,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";
    
    const divStyle: React.CSSProperties = {
        padding: "24px",
        float: "left",
      }
    
      const h2LogoStyle: React.CSSProperties = {
          float: "right",
          padding: "6px 24px"
      }

      const tvrLogoStyle: React.CSSProperties = {
          padding:"6px 0 0 12px"
      }


    return ( 
        <div>
            <div>
                <img style={tvrLogoStyle} src={TVRLogo} alt="TVR Logo" width="10%" height="10%"></img>
                <img style={h2LogoStyle} src={H2weiLogo} alt="H2wei Logo" width="10%" height="10%"></img>
            </div>
            <div>
                <img style={divStyle} src={props.image} alt="Player Picture" width="50%" height="50%"></img>
                
                <div style={divStyle}>
                    <h1>{props.name} | {props.number}</h1>
                    <h2>{props.rangerName}</h2>
                    <hr></hr>
                    <h3>Position: {props.position}</h3>
                    <h3>Alter: {props.age}</h3>
                    <h3>Im Team seit: {props.memberSince}</h3>
                </div>
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