import * as viewModel from "./new-account.vm";
import * as apiModel from "./api";

export const mapAccountFromVmtoApi = (account: viewModel.AccountVm): apiModel.Account => ({
  id: "",
  iban: "",
  type: account.type,
  name: account.name,
  balance: 0,
  lastTransaction: "",
});