import { AppLayout } from "@/layouts";
import React from "react";
import { NewAccountFormComponent } from "./component";
import { AccountVm } from "./new-account.vm";
import classes from "./new-account.module.css";
import { mapAccountFromVmtoApi } from "./new-account.mapper";
import { saveAccount } from "./api";

export const NewAccountPage: React.FC = () =>{

  const handleNewAccount = (newAccount: AccountVm) =>{
    const addAccount = mapAccountFromVmtoApi(newAccount);
    saveAccount(addAccount).then((result) =>{
      if(result){
        alert("Cuenta bancaria añadida correctamente");
      }else{
        alert("Error al añadir la nueva cuenta bancaria");
      }
    });
  };

  return(
    <AppLayout>
      <div className={classes.container}>
        <h1 className={classes.title}>Nueva Cuenta Bancaria</h1>
        <NewAccountFormComponent onAccount={handleNewAccount}/>
      </div>
    </AppLayout>
  );
}