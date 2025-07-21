import { Block } from '../classes/block.ts';

export type BlockClassType = new (...args: unknown[]) => Block;
