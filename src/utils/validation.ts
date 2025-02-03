import { DAMPING_RANGE, STIFFNESS_RANGE } from '../config/rangeConfig';

export const clampValue = (value: number, name: string) => {
  const range = name === 'damping' ? DAMPING_RANGE : STIFFNESS_RANGE;
  const { min, max } = range;

  if (value < min || value > max) {
    console.warn(
      `${name} value (${value}) is out of the allowed range. Please use a value between ${min} and ${max}.`
    );
  }
  return Math.min(Math.max(value, min), max);
};

export const validateHeightFactors = (minFactor: number, maxFactor: number) => {
  if (maxFactor >= minFactor) {
    console.warn(
      `minHeightFactor (${maxFactor}) must be less than maxHeightFactor (${minFactor}). Default values will be used.`
    );
    return { minFactor: 6, maxFactor: 2 };
  }
  return { minFactor, maxFactor };
};
