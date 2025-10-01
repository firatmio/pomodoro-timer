# Pomodoro Timer in TypeScript


![TypeScript](https://img.shields.io/badge/Language-TypeScript-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)


## Overview


A minimal Pomodoro timer built with TypeScript, HTML, and CSS. Tracks work and break intervals with Start, Pause, and Reset controls. Stores the timer state in localStorage to continue across page reloads.


## Features


- Work and break intervals (25 min / 5 min)
- Start, Pause, and Reset buttons
- LocalStorage persistence
- Simple and responsive UI
- TypeScript powered for type safety


## Technologies Used


- **Frontend:** TypeScript, HTML, CSS
- **Storage:** localStorage


## Getting Started


### Prerequisites


- Node.js (optional, if using tsc via CLI)
- TypeScript installed globally: `npm install -g typescript`


### Installation & Running


1. Clone the repository:
```bash
git clone https://github.com/firatmio/pomodoro-timer
cd pomodoro-timer
```


2. Compile TypeScript:
```bash
tsc
```
This generates `script.js` from `script.ts`.


3. Open `index.html` in your browser.


## Project Structure


```
pomodoro-ts/
├── index.html     # Main HTML page
├── style.css      # CSS styling
├── script.ts      # TypeScript logic
├── script.js      # Compiled JavaScript
├── tsconfig.json  # TypeScript configuration
├── LICENSE        # MIT License
└── README.md      # Project documentation
```


## License


This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
