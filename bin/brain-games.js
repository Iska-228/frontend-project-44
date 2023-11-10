#! /usr/bin/env node
/* eslint-disable */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */

import { getName } from '../src/cli.js';
import {isEven,task} from './brain-even.js';

const name = getName();
isEven(name);