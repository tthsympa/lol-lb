# LoL leaderboard

Goal of the app is to display real-time infos about a League of Legends game.

Infos are provided by the `frames.jsonl` file.

## To test

You can build the app with `yarn build`.

Open it in your browser with `serve -s build` (need to have `serve` installed) or `npx serve -s build`.

In another terminal, launch `yarn server`. It will start the websocket server, streaming the `frames.jsonl` file.

You should start to see things move on the app!

## To go faster

You can adjust the speed of the messages send by the server by adding `--fast-forward x` e.g. `yarn server --fast-forward 10`

## Stack

This app uses:
- Typescript
- React
- Sass modules
- react-google-charts