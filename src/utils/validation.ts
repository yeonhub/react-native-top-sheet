import { DAMPING_RANGE, STIFFNESS_RANGE } from '../config/rangeConfig';

/**
 * Clamps a value within the predefined range for the specified parameter
 * @param value - The value to be clamped
 * @param name - The name of the parameter ('damping' or 'stiffness')
 * @return The clamped value within the allowed range
 */
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

/**
 * Validates the height factors to ensure proper sheet behavior
 * @param minFactor - The minimum height factor
 * @param maxFactor - The maximum height factor
 * @return An object containing validated minFactor and maxFactor values
 */
export const validateHeightFactors = (minFactor: number, maxFactor: number) => {
  if (maxFactor >= minFactor) {
    console.warn(
      `minHeightFactor (${maxFactor}) must be less than maxHeightFactor (${minFactor}). Default values will be used.`
    );
    return { minFactor: 6, maxFactor: 2 };
  }
  return { minFactor, maxFactor };
};
