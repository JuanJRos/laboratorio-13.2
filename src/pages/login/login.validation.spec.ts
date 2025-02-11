import { REQUIRED_FIELD_MESSAGE } from "@/common/validations";
import { validateForm } from "./login.validation";
import { Credentials } from "./login.vm";

describe("pages/login/login.validation.ts", () =>{
    it("Should return validation succeeded when both fields are informed", () =>{
        //Arrange
        const credentials: Credentials ={
            user: "myuser",
            password: "mypassword",
        };

        //Act
        const result = validateForm(credentials);

        //Assert
        expect(result.succeeded).toBeTruthy();
        expect(result.errors.user).toEqual("");
        expect(result.errors.password).toEqual("");
    });
});

describe("pages/login/login.validation.ts", () =>{
    it("Should return validation failed when field user is empty", () =>{
        //Arrange
        const credentials: Credentials ={
            user: "",
            password: "mypassword",
        };

        //Act
        const result = validateForm(credentials);

        //Assert
        expect(result.succeeded).toBeFalsy();
        expect(result.errors.user).toEqual(REQUIRED_FIELD_MESSAGE);
        expect(result.errors.password).toEqual("");
    });
});

describe("pages/login/login.validation.ts", () =>{
    it("Should return validation failed when password is empty", () =>{
        //Arrange
        const credentials: Credentials ={
            user: "myuser",
            password: "",
        };

        //Act
        const result = validateForm(credentials);

        //Assert
        expect(result.succeeded).toBeFalsy();
        expect(result.errors.user).toEqual("");
        expect(result.errors.password).toEqual(REQUIRED_FIELD_MESSAGE);
    });
});

describe("pages/login/login.validation.ts", () =>{
    it("Should return validation failed when both fields are empty", () =>{
        //Arrange
        const credentials: Credentials ={
            user: "",
            password: "",
        };

        //Act
        const result = validateForm(credentials);

        //Assert
        expect(result.succeeded).toBeFalsy();
        expect(result.errors.user).toEqual(REQUIRED_FIELD_MESSAGE);
        expect(result.errors.password).toEqual(REQUIRED_FIELD_MESSAGE);
    });
});