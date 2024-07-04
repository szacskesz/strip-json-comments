import {expectType} from 'tsd';
import stripJsonComments from './index.mjs';

const json = '{/*rainbows*/"unicorn":"cake"}';

expectType<string>(stripJsonComments(json));
expectType<string>(stripJsonComments(json, {whitespace: true}));
expectType<string>(stripJsonComments(json, {trailingCommas: true}));
expectType<string>(stripJsonComments(json, {whitespace: true, trailingCommas: true}));
