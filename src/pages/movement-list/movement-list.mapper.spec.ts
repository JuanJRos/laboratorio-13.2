import * as apiModel from "./api";
import { mapMovementListFromApitoVm } from "./movement-list.mapper";

describe("pages/movement-list/movement-list.mapper spec", () =>{
  describe("mapMovementListFromApitoVm", () =>{
    it("Should return empty array when if feeds empty array", () =>{
      //Arrange
      const movementList: apiModel.Movement[]=[];

      //Act
      const result = mapMovementListFromApitoVm(movementList);

      //Assert
      expect(result).toEqual([]);
    });

    it("Should return the same array but using VM model structure", () =>{
      //Arrange
      const movementList: apiModel.Movement[] = [
        {
          id: "1",
          description: "Nomina Noviembre",
          amount: 920,
          balance: 1490,
          transaction: "2019-12-09T21:30:00",
          realTransaction: "2019-12-09T21:30:00",
          accountId: "1"
        },
        {
          id: "2",
          description: "Alquiler Noviembre",
          amount: -400,
          balance: 590,
          transaction: "2019-12-07T11:30:00",
          realTransaction: "2019-12-08T20:00:10",
          accountId: "1"
        },
      ];

      //Act
      const result = mapMovementListFromApitoVm(movementList);

      //Assert
      expect(result).toEqual([
        {
          id: "1",
          transaction: new Date("2019-12-09T21:30:00"),
          realTransaction: new Date("2019-12-09T21:30:00"),
          description: "Nomina Noviembre",
          amount: "920",
          balance: "1490"
        },
        {
          id: "2",
          transaction: new Date("2019-12-07T11:30:00"),
          realTransaction: new Date("2019-12-08T20:00:10"),
          description: "Alquiler Noviembre",
          amount: "-400",
          balance: "590"
        },
      ]);
    });
  });
});