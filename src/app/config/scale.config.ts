import { InjectionToken } from '@angular/core';

export const SCALE_CONFIG = new InjectionToken<number[]>('scale.config');

export const SPACING_SCALE_UNIT = 4;

export const SPACING_SCALE_CONFIG = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96
];

export const ELEVATION_SCALE_CONFIG = [0, 10, 20, 30, 40, 50];

export const OPACITY_SCALE_CONFIG = [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100];

export const BORDER_SCALE_CONFIG = [0, 2, 4, 6, 8, 10];

export const DIVIDER_SCALE_CONFIG = [0, 2, 4, 6, 8, 10];

export const DURATION_SCALE_CONFIG = [75, 100, 150, 200, 300, 500, 700, 1000, 1200, 1500, 2000, 3000, 5000, 10000];

export const ROTATION_SCALE_CONFIG = [0, 1, 2, 3, 6, 12, 45, 90, 180];

export const SCALING_SCALE_CONFIG = [0, 50, 75, 90, 95, 100, 105, 110, 125, 150];
