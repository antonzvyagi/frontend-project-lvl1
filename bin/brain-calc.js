#!/usr/bin/env node

import cli from '../src/cli.js';
import { game } from '../src/games/calc.js';
import { playGame } from '../src/index.js';

const username = cli.start();
playGame(username, game);
