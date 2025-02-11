
import React from "react";
import { AppLayout } from "@/layouts";
import { AccountVm } from "./account-list.vm";
import classes from "./account-list.page.module.css"
import { AccountListTableComponent } from "./components";
import { getAccountList } from "./api";
import { mapAccountListFromApitoVm } from "./account-list.mapper";
import { generatePath, useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";


export const AccountListPage: React.FC = () => {
    const[accountList, setAccountList] = React.useState<AccountVm[]>([]);

    React.useEffect(() => {getAccountList().then((result) => setAccountList(mapAccountListFromApitoVm(result)))}, []);

    const navigate = useNavigate();
    const clickAddAcount = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();  
        navigate(generatePath(appRoutes.newAccount));
    };

    return (
        <AppLayout>
        <div className={classes.root}>
            <div className={classes.headerContainer}>
                <h1>Mis cuentas</h1>
                <button onClick={clickAddAcount}>AGREGAR NUEVA CUENTA</button>
            </div>
            <AccountListTableComponent accountList={accountList}/>
        </div>
        </AppLayout>);
};