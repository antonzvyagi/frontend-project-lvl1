#!/usr/bin/env node

import cli from '../src/cli.js';
import { game } from '../src/games/parity.js';
import { playGame } from '../src/games/engine.js';

const username = cli.start();
playGame(username, game);