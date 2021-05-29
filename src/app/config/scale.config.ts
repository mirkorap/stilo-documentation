import { InjectionToken } from '@angular/core';

export const SCALE_CONFIG = new InjectionToken<number[]>('scale.config');

export const SPACING_SCALE_UNIT = 4;

export const SPACING_SCALE_CONFIG = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96
];

export const ELEVATION_SCALE_CONFIG = [0, 10, 20, 30, 40, 50];

export const COLOR_OPACITY_SCALE_CONFIG = [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100];
