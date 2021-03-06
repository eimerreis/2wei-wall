# 2wei Wall App

## How to Run locally

### Install and Configure

- Run npm install in `/server` and `wall-app` directory
- Create a .env file in `/server` with the following content
```
SAMS_API_BASE_URL={{SamsApiUrlGoesHere}}
SAMS_API_KEY={{SamsApiSecretGoesHere}}
SAMS_TEAM_ID={{SamsTeamIdGoesHere}
SAMS_MATCH_SERIES_ID={{SamsMatchSeriesIdGoesHere}
```

### Run Server

To run the server locally, execute the following commands

- `cd /server`
- `yarn watch`

### Run Application

To run the app locally, execute the following commands

- `cd /wall-app`
- `npm run start`

## Controlling the Wall App

- navigate to `http://localhost:3000/remote-control`

## Adding new Home Players

- simply extend the `/server/src/tvr-players/players.json` file


## Ideas

- create Hooks for Websocket Connection
  - `const { onEvent, send } = useWebhook("onSlideChange");
  -  could be used inside a WebhookContext.Provider, which set's up connection information etc
- use styled-components + it's server side rendering 
- use framer motion for page transitions
- better handling of setTimeout
- error handling ist not there currently
- hosting + ci / cd
