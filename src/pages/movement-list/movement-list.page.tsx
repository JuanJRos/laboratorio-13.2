import { AppLayout } from "@/layouts";
import React from "react";
import { MovementVm } from "./movement-list.vm";
import classes from "./movement-list.page.module.css"
import { MovementListTableComponent } from "./components";
import { Account, getAccountList, getMovementsList } from "./api";
import { mapMovementListFromApitoVm } from "./movement-list.mapper";
import { useParams } from "react-router-dom";

export const MovementListPage: React.FC = () => {
    const {id} = useParams<{id: string}>();

    const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
    const [account, setAccount] = React.useState<Account>();
    
    if(id){
        React.useEffect(() => {getMovementsList(id).then((result) => setMovementList(mapMovementListFromApitoVm(result)))}, []);
        React.useEffect(() => {getAccountList(id).then((result) => setAccount(result))}, []);
    }

    return (
        <AppLayout>
            <div className={classes.root}>
                <div className={classes.headerContainer}>
                    <div>
                        <h1>Saldos y Últimos movimientos</h1>
                    </div>
                    <div>
                        <div className={classes.bold}>SALDO DISPONIBLE</div>
                        <div className={classes.headerBalance}>{account ? `${account.balance} €` : ""}</div>
                    </div>
                </div>
                <div className={classes.headerBotton}>
                    <span>Alias: {account ? `${account.name}` : ""}</span>
                    <span>IBAN: {account ? `${account.iban}` : ""}</span>
                </div>
                <div>
                    <MovementListTableComponent movementList={movementList}/>
                </div>
            </div>
        </AppLayout>
    );
};