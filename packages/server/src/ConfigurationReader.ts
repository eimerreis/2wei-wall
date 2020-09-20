export interface SamsConfig {
    ApiKey: string;
    ApiUrl: string;
    TeamId: string;
    MatchSeriesId: string;
}

interface Config {
    Sams: SamsConfig;
}


export class ConfigurationReader {
    public static GetConfig = (process: any): Config => {
        return {
            Sams: {
                ApiKey: process.env.SAMS_API_KEY,
                ApiUrl: process.env.SAMS_API_BASE_URL,
                TeamId: process.env.SAMS_TEAM_ID,
                MatchSeriesId: process.env.SAMS_MATCH_SERIES_ID
            }
        }
    }
}