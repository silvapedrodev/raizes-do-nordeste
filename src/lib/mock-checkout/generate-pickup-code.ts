const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const randomLetter = () => LETTERS[Math.floor(Math.random() * LETTERS.length)];
const randomDigit = () => Math.floor(Math.random() * 10);

export const generatePickupCode = (): string => {
  return `${randomLetter()}${randomDigit()}${randomDigit()}${randomLetter()}`;
};