// Generated by https://quicktype.io

export interface HomeGameResponse {
    id:                      string;
    uuid:                    string;
    number:                  string;
    date:                    string;
    time:                    string;
    delayPossible:           string;
    decidingMatch:           string;
    indefinitelyRescheduled: string;
    host:                    Host;
    team:                    Team[];
    matchSeries:             MatchSeries;
    location:                Location;
    referees:                Referees;
}

export interface Host {
    id:    string;
    uuid:  string;
    name:  string;
    club?: string;
}

export interface Location {
    id:         string;
    name:       string;
    street:     string;
    extraField: string;
    postalCode: string;
    city:       string;
    note:       string;
}

export interface MatchSeries {
    id:               string;
    uuid:             string;
    allSeasonId:      string;
    name:             string;
    shortName:        string;
    type:             string;
    updated:          string;
    structureUpdated: string;
    resultsUpdated:   string;
    season:           Host;
    hierarchy:        Hierarchy;
    fullHierarchy:    FullHierarchy;
    association:      Association;
}

export interface Association {
    name:      string;
    shortName: string;
}

export interface FullHierarchy {
    hierarchy: Hierarchy[];
}

export interface Hierarchy {
    id:             string;
    name:           string;
    shortName:      string;
    hierarchyLevel: string;
    uuid?:          string;
}

export interface Referees {
    referee: Referee[];
}

export interface Referee {
    type:      string;
    id:        string;
    title:     Title;
    lastname:  string;
    firstname: string;
    city:      string;
    sex:       string;
}

export interface Title {
}

export interface Team {
    number:       string;
    id:           string;
    uuid:         string;
    seasonTeamId: string;
    name:         string;
    shortName:    string;
    clubCode:     string;
    club:         Club;
}

export interface Club {
    name:      string;
    shortName: Title;
}