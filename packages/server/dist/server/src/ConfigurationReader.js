"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationReader = void 0;
class ConfigurationReader {
}
exports.ConfigurationReader = ConfigurationReader;
ConfigurationReader.GetConfig = (process) => {
    return {
        Sams: {
            ApiKey: process.env.SAMS_API_KEY,
            ApiUrl: process.env.SAMS_API_BASE_URL,
            TeamId: process.env.SAMS_TEAM_ID,
            MatchSeriesId: process.env.SAMS_MATCH_SERIES_ID
        }
    };
};
//# sourceMappingURL=ConfigurationReader.js.map