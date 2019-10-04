import { HomePlayersAutomation } from './HomePlayers';
import { ResultsAutomation } from './ResultsAutomation';
export const AllAutomation = async () => {
    await HomePlayersAutomation();
    await ResultsAutomation();
}