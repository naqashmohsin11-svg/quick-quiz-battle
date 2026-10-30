# Quick Quiz Battle ⚡

A real-time multiplayer party quiz for **2–8 players**. Friends join from their own phones or computers using a room code.

## Features

- Create a private room and invite friends with a six-character code
- Attractive waiting lobby with player avatars and ready states
- Three rounds and 15 multiple-choice questions
- Synchronized 15-second countdown for every question
- 500 base points plus up to 500 speed-bonus points for correct answers
- Live leaderboard, answer reveal, explanations, and final winner podium
- Responsive layout for phones, tablets, and desktop browsers

## Run locally

Requirements: Node.js 18 or newer.

1. Download or clone this repository.
2. Run `npm start`.
3. Open **http://localhost:3000**.
4. To test multiplayer, open the address in two separate browser tabs, create a room in one, and join from the other using its room code.

## Deploy with Render

This repository includes a Render Blueprint (`render.yaml`).

1. Sign in to [Render](https://render.com).
2. Choose **New → Blueprint**.
3. Connect your GitHub account and select **naqashmohsin11-svg/quick-quiz-battle**.
4. Review the service settings and click **Apply**.
5. When the service status is **Live**, copy its public `onrender.com` address.

The build step extracts the bundled source files before starting the Node.js server. The service uses the same origin for the website and WebSocket multiplayer connections.

## Gameplay rules

- 2–8 players per room; only the host can start a match.
- Round 1: General Knowledge.
- Round 2: Science, Technology & Sports.
- Round 3: Brain Challenge.
- Each round has five questions; all players receive each question at the same time.
- Players have 15 seconds to answer. Correct answers earn 500 base points plus a speed bonus of up to 500 points. Wrong or unanswered questions earn zero points.
- The highest total score after 15 questions wins. Tied top scores are joint winners.

## Project notes

- Node.js HTTP server and native WebSocket handling; no external npm packages are required.
- Active rooms are held in memory and are cleared if the server restarts.
- This first version does not include accounts, persistent match history, or multi-server room storage.
