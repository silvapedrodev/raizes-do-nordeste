const LETTERS = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const DIGITS = "23456789";

const randomLetter = () =>
  LETTERS[Math.floor(Math.random() * LETTERS.length)];

const randomDigit = () =>
  DIGITS[Math.floor(Math.random() * DIGITS.length)];

export const generatePickupCode = (): string => {
  return `${randomLetter()}${randomDigit()}${randomDigit()}${randomLetter()}`;
};