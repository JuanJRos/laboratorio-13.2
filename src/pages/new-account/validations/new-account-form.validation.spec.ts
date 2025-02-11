import { AccountVm } from "../new-account.vm";
import { vi } from "vitest";
import * as newAccountFielValidation from "./new-account-field.validation";
import { validateForm } from "./new-account-form.validation";


describe("new-account-form.validation spec", () =>{
  describe("validateForm", () =>{
    it("Should return true when all fields are informed", () =>{
      //Arrange
      const account: AccountVm = {
        type: "1",
        name: "Compartida",
      };
      vi.spyOn(newAccountFielValidation, "validateTypeField").mockReturnValue({succeeded: true});
      vi.spyOn(newAccountFielValidation, "validateAliasField").mockReturnValue({succeeded: true});

      //Act
      const result = validateForm(account);

      //Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
        type: "",
        name: "",
      });
    });
    it("Should return false when validateTypeField is empty", () =>{
      //Arrange
      const account: AccountVm = {
      type: "",
      name: "Compartida",
      } ;
      vi.spyOn(newAccountFielValidation, "validateTypeField").mockReturnValue({succeeded: false, errorMessage: "Error"});
      vi.spyOn(newAccountFielValidation, "validateAliasField").mockReturnValue({succeeded: true});

      //Act
      const result = validateForm(account);

      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "Error",
        name: "",
      });
    });
    it("Should return false when validateAliasField is empty", () =>{
      //Arrange
      const account: AccountVm = {
      type: "2",
      name: "",
      } ;
      vi.spyOn(newAccountFielValidation, "validateTypeField").mockReturnValue({succeeded: true});
      vi.spyOn(newAccountFielValidation, "validateAliasField").mockReturnValue({succeeded: false, errorMessage: "Error"});

      //Act
      const result = validateForm(account);

      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "",
        name: "Error",
      });
    });
  });
});