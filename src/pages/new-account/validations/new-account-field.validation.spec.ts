import { REQUIRED_FIELD_MESSAGE } from "@/common/validations";
import { validateAliasField, validateTypeField } from "./new-account-field.validation";

describe("new-account-field.validation spec", () =>{
  describe("validateTypeField", () =>{
    it("Should return false when type field is empty", () =>{
      //Arrange
      const value = "";

      //Act
      const result = validateTypeField(value);

      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
    it("Should return true when type is informed", () =>{
      //Arrange
      const value = "2";

      //Act
      const result = validateTypeField(value);

      //Assert
      expect(result.succeeded).toBeTruthy();
    })
  });

  describe("validateAliasField", () =>{
    it("Should return false when type alias is empty", () =>{
      //Arrange
      const value = "";

      //Act
      const result = validateAliasField(value);

      //Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toEqual(REQUIRED_FIELD_MESSAGE);
    });
    it("Should return true when type is informed", () =>{
      //Arrange
      const value = "2";

      //Act
      const result = validateAliasField(value);

      //Assert
      expect(result.succeeded).toBeTruthy();
    })
  });
});