import { isPositiveNumber, isValidIban, isDateAfterToday, isEmailWeelFormed, isStringValueInformed, isValueNotNullOrUndefined } from "./plain.validation";

describe("plain.validation", () =>{
  describe("isValueNotNullOrUndefined specs", () => {
    it("should return true when value is not null or undefined", () => {
      // Arrange
      const value = "test";
    
      // Act
      const result = isValueNotNullOrUndefined(value);
    
      // Assert
      expect(result).toBeTruthy();
    });
    
    it("should return false when value is null", () => {
      // Arrange
      const value = null;
    
      // Act
      const result = isValueNotNullOrUndefined(value);
    
      // Assert
      expect(result).toBeFalsy();
    });
    
    it("should return false when value is undefined", () => {
      // Arrange
      const value = undefined;
    
      // Act
      const result = isValueNotNullOrUndefined(value);
    
      // Assert
      expect(result).toBeFalsy();
    });
  });

  describe("isPositiveNumber", () =>{
    it("Should return true when amount is positive", () =>{
      //Arrange
      const amount = 1;

      //Act
      const result = isPositiveNumber(amount);

      //Assert
      expect(result).toBeTruthy();
    });
    it("Should return false when amount is negative", () =>{
      //Arrange
      const amount = -1;

      //Act
      const result = isPositiveNumber(amount);

      //Assert
      expect(result).toBeFalsy();
    });
  });

  describe("isDateAfterToday", () =>{
    it("Should return true when date is after today", () =>{
      //Arrange
      const date = new Date();
      date.setDate(date.getDate() + 1);

      //Act
      const result = isDateAfterToday(date);

      //Assert
      expect(result).toBeTruthy();
    });
    it("Should return false when date is before today", () =>{
      //Arrange
      const date = new Date();
      date.setDate(date.getDate() - 1);

      //Act
      const result = isDateAfterToday(date);

      //Assert
      expect(result).toBeFalsy();
    });
    it("Should return false when date is today", () =>{
      //Arrange
      const date = new Date();

      //Act
      const result = isDateAfterToday(date);

      //Assert
      expect(result).toBeFalsy();
    });
  });

  describe("isEmailWeelForm", () =>{
    it("Should return true when email is well formed", () =>{
      //Arrange
      const email = "john@gmail.com";

      //Act
      const result = isEmailWeelFormed(email);

      //Assert
      expect(result).toBeTruthy();
    });
    it("Should return false when email is not weel formed", () =>{
      //Arrange
      const email = "john@gmail";

      //Act
      const result = isEmailWeelFormed(email);

      //Assert
      expect(result).toBeFalsy();
    });
  });

  describe("isStringValueInformed", () =>{
    it("Should return true when field is informed", () =>{
      //Arrange
      const email = "test";

      //Act
      const result = isStringValueInformed(email);

      //Assert
      expect(result).toBeTruthy();
    });
    it("Should return false when field is not informed", () =>{
      //Arrange
      const email = "";

      //Act
      const result = isStringValueInformed(email);

      //Assert
      expect(result).toBeFalsy();
    });
  });

  describe("isValidIban", () =>{
    it("Should return true when iban is valid", () =>{
      //Arrange
      const iban = "ES91 2100 0418 4502 0005 1332";

      //Act
      const result = isValidIban(iban);

      //Assert
      expect(result).toBeTruthy();
    });

    it("Should return true when iban is formatted with dashes", () =>{
      //Arrange
      const iban = "ES91-2100-0418-4502-0005-1332";

      //Act
      const result = isValidIban(iban);

      //Assert
      expect(result).toBeTruthy();
    });

    it("Should return true when iban is formatted with no spaces", () =>{
      //Arrange
      const iban = "ES9121000418450200051332";

      //Act
      const result = isValidIban(iban);

      //Assert
      expect(result).toBeTruthy();
    });

    it("Should return false when iban is invalid", () =>{
      //Arrange
      const iban = "ES91 2100 0418 4502 0005";

      //Act
      const result = isValidIban(iban);

      //Assert
      expect(result).toBeFalsy();
    });

    it("Should return false when iban is empty", () =>{
      //Arrange
      const iban = "";

      //Act
      const result = isValidIban(iban);

      //Assert
      expect(result).toBeFalsy();
    });
  });
});
