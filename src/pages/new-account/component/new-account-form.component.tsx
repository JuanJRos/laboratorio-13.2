import React from "react";
import classes from "./new-account-form.component.module.css"
import { AccountError, AccountVm, createEmptyAccountError, createEmptyAccountVm } from "../new-account.vm";
import { validateForm } from "../validations";


interface AccountType {
  id: string;
  type: string;
};

interface Props {
  onAccount: (account: AccountVm) => void;
};

const accountType: AccountType[] =[
  {
    id: "1",
    type: "Corriente"
  },
  {
    id: "2",
    type: "Ahorro"
  }
];

export const NewAccountFormComponent: React.FC<Props> = (props) =>{
  const {onAccount} = props;

  const [account, setAccount] = React.useState<AccountVm>(createEmptyAccountVm());

  const [errors, setErrors] = React.useState<AccountError>(createEmptyAccountError());

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    const formValidationResult = validateForm(account);
    setErrors(formValidationResult.errors);
    if(formValidationResult.succeeded){
      onAccount(account);
    };
  };

  const handleFieldChange = (e: | React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) =>{
    setAccount({...account, [e.target.name]: e.target.value});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <div>
            <label>Tipo de cuenta: </label>
            <select className={classes.typeSelect} name="type" onChange={handleFieldChange}>
              <option value="">Seleccionar</option>
              {accountType.map((type) =>(
                <option key={type.id} value={type.id}>
                  {type.type}
                </option>
              ))};
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label>Alias: </label>
            <input type="text" name="name" className={classes.inputSize} onChange={handleFieldChange}></input>
            <p className={classes.error}>{errors.name}</p>
          </div>
        </div>
        <button className={classes.button}>Guardar</button>
      </form>
    </div>
  );
};