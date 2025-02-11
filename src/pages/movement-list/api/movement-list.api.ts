import Axios from "axios";
import { Movement, Account } from "./movement-list.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;
const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getMovementsList = (accountId: string): Promise<Movement[]> => 
  Axios.get<Movement[]>(urlMovements, {params: {accountId}}).then(({data}) => data);

export const getAccountList = (accountId: string): Promise<Account> => Axios.get<Account>(`${urlAccount}/${accountId}`).then(({data}) => data);