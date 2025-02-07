import { createEmptyCredentialsFormErrors, CredentialsFormErrors } from "./login.vm";

interface ValidationResult {
    succeeded: boolean;
    errors: CredentialsFormErrors;
};

export const validateForm = (credentials: CredentialsFormErrors): ValidationResult => {
    let validationResult: ValidationResult = {
        succeeded: true,
        errors: createEmptyCredentialsFormErrors(),
    };

    if(!credentials.user.trim()){
        validationResult.errors = {
            ...validationResult.errors,
            user: "Debe de informar el campo de usuario",
        };
        validationResult.succeeded = false;
    }

    if(!credentials.password.trim()){
        validationResult.errors = {
            ...validationResult.errors,
            password: "Debe de informar el campo contraseña",
        };
        validationResult.succeeded = false;
    }

    return validationResult;
};