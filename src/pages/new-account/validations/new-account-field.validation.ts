import { buildRequiredFieldValidationFieldResponse, buildValidationSucceededResult, FieldValidationResult, isStringValueInformed } from "@/common/validations";

export const validateTypeField = (value: string): FieldValidationResult =>{
  if(!isStringValueInformed(value)){
    return buildRequiredFieldValidationFieldResponse();
  }

  return buildValidationSucceededResult();
}

export const validateAliasField = (value: string): FieldValidationResult =>{
  if(!isStringValueInformed(value)){
    return buildRequiredFieldValidationFieldResponse();
  }

  return buildValidationSucceededResult();
};