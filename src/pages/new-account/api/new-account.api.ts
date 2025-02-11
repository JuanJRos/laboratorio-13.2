import Axios from "axios";
import { Account } from "./new-account.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = (account : Account): Promise<boolean> => 
  Axios.post<boolean>(url, account).then(({data}) => data);