import { FormValidationResult } from "@/common/validations";
import { AccountError, AccountVm } from "../new-account.vm";
import { validateAliasField, validateTypeField } from "./new-account-field.validation";

export const validateForm = (account: AccountVm): FormValidationResult<AccountError> =>{
  const fieldValidationResults = [
    validateTypeField(account.type),
    validateAliasField(account.name),
  ];
  
  return {
    succeeded: fieldValidationResults.every((f) => f.succeeded),
    errors:{
      type: fieldValidationResults[0].errorMessage ?? "",
      name: fieldValidationResults[1].errorMessage ?? "",
    }
  }
};