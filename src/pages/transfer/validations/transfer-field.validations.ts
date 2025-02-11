import {isValidIban, isStringValueInformed, isPositiveNumber, isValueNotNullOrUndefined, isDateAfterToday, isEmailWeelFormed, buildValiationFailedResult, buildValidationSucceededResult, buildRequiredFieldValidationFieldResponse} from "@/common/validations";
import { INVALID_IBAN_MESSAGE, INVALID_AMOUNT_MESSAGE, INVALID_REAL_DATE_TRANSFER_MESSAGE, INVALID_EMAIL_MESSAGE } from "@/common/validations/validation.const";
import { FieldValidationResult } from "@/common/validations/validation.model";



export const validateIBANField = (value: string): FieldValidationResult =>{
  if(!isStringValueInformed(value)){
    return buildRequiredFieldValidationFieldResponse();
  }

  if(!isValidIban(value)){
    return buildValiationFailedResult(INVALID_IBAN_MESSAGE);
  }

  return buildValidationSucceededResult();
};

export const validateAccountIdField = (idValue: string): FieldValidationResult =>{
  if(!isStringValueInformed(idValue)){
    return buildRequiredFieldValidationFieldResponse();
  }

  return buildValidationSucceededResult();
};

export const validateNameField = (value: string): FieldValidationResult =>{
  if(!isStringValueInformed(value)){
    return buildRequiredFieldValidationFieldResponse();
  }

  return buildValidationSucceededResult();
};

export const validateAmountField = (value: number): FieldValidationResult =>{
  if(!isPositiveNumber(value)){
    return buildValiationFailedResult(INVALID_AMOUNT_MESSAGE);
  }

  return buildValidationSucceededResult();
};

export const validateConceptField = (value: string): FieldValidationResult =>{
  if(!isStringValueInformed(value)){
    return buildRequiredFieldValidationFieldResponse();
  }

  return buildValidationSucceededResult();
};

export const validateNotesField = (_: string): FieldValidationResult => buildValidationSucceededResult();

export const validateRealDateTransferField = (value?: Date) =>{
  if(!isValueNotNullOrUndefined(value)){
    return buildValidationSucceededResult();
  }

  if(value && !isDateAfterToday(value)){
    return buildValiationFailedResult(INVALID_REAL_DATE_TRANSFER_MESSAGE);
  }

  return buildValidationSucceededResult();
};

export const validateEmailField = (value: string): FieldValidationResult =>{
  if(!isStringValueInformed(value)){
    return buildValidationSucceededResult();
  }

  if(!isEmailWeelFormed(value)){
    return buildValiationFailedResult(INVALID_EMAIL_MESSAGE);
  }

  return buildValidationSucceededResult();
};




