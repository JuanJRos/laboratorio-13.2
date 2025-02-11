import { REQUIRED_FIELD_MESSAGE } from "./validation.const";
import { FieldValidationResult } from "./validation.model";

export const buildValiationFailedResult = (errorMessage: string): FieldValidationResult => ({
  succeeded: false,
  errorMessage: errorMessage,
});

export const buildValidationSucceededResult = (): FieldValidationResult => ({
  succeeded: true,
});

export const buildRequiredFieldValidationFieldResponse = (): FieldValidationResult => 
  buildValiationFailedResult(REQUIRED_FIELD_MESSAGE);