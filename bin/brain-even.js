#!/usr/bin/env node

import cli from '../src/cli.js';
import parity from '../src/games/parity.js';

const username = cli.start();
parity(username);