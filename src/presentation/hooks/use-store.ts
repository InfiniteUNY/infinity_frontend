'use client';

import { createInternalStore, createPublicStore } from '@/presentation/stores';
import { useStore } from 'zustand';

export const internalStore = createInternalStore();
export const publicStore = createPublicStore();

export { useStore };
