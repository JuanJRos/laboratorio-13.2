import validator from "validator";

export const isValidIban = (iban: string): boolean => validator.isIBAN(iban);

export const isPositiveNumber = (amount: number): boolean => amount >0;

export const isDateAfterToday = (date: Date): boolean => date > new Date();

export const isEmailWeelFormed = (email: string): boolean => validator.isEmail(email);

export const isStringValueInformed = (field: string): boolean => field !== "";

export const isValueNotNullOrUndefined = <T>(value: T): boolean =>{
  return value !== null && value !== undefined;
};