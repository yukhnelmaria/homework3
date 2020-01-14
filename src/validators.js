// Функции-валидаторы для всех примеров

// Возвращает true, если символ является валидным символом логина.
export const isValidLoginCharacter = char =>
  (char >= "a" && char <= "z") || (char >= "A" && char <= "Z") || char === " ";

// Возвращает true, если все символы строки является валидными символами логина
export const isValidName = name =>
  name &&
  name.trim() &&
  name.split("").every(char => isValidLoginCharacter(char));

export const isValidPhone = phone => Boolean(phone.match(/^\+375(17|29|33|44)[0-9]{7}$/));