# Concept for h2wei Video Wall App 2k19 Edition

## App which runs on the Wall

The VideoWall will be connected to a computer, that simply runs a browser window containing the webapp, that renders content.
This App will have the following functions:
1. Receiving WebSocket Events

### Types of Events

**RenderComponent Event**:

```json
{
    "payload": "<div style="...">some content here</div>"
}
```

## WebSocket Server

- Get Current Table from SAMS API
- Get H2 Team (use an Azure Storage Account or a simple MongoDb for this maybe?).
- Get Oponnent Team (use SAMS API?)
- Get some Gifs of H2

## App which will send Events

- Retrieves stuff from API and Renders it to a React Component
- React Component will also be rendered as Markup and Sent via Websocket 
