import * as apiModel from "./api";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApitoVm = (movementList: apiModel.Movement[]): viewModel.MovementVm[] => 
  movementList.map((movement) => ({
    id: movement.id,
    transaction: new Date(movement.transaction),
    realTransaction: new Date(movement.realTransaction),
    description: movement.description,
    amount: movement.amount.toString(),
    balance: movement.balance.toString(),
  }));