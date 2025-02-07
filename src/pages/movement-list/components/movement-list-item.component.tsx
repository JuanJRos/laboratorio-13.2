import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";

interface Props {
  movementItem: MovementVm;
};

export const MovementListItemComponent: React.FC<Props> = (props) =>{
  const {movementItem} = props;

  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>{movementItem.transaction.toLocaleDateString()}</span>
      <span className={classes.dataCell}>{movementItem.realTransaction.toLocaleDateString()}</span>
      <span className={classes.dataCell}>{movementItem.description}</span>
      <span className={movementItem.amount.startsWith("-") ?
        `${classes.dataCell} ${classes.alignRight} ${classes.negative}` : 
        `${classes.dataCell} ${classes.alignRight}`}>
        {`${movementItem.amount} €`}
        </span>
      <span className={movementItem.balance.startsWith("-") ?
        `${classes.dataCell} ${classes.alignRight} ${classes.negative}` : 
        `${classes.dataCell} ${classes.alignRight}`}>
          {`${movementItem.balance} €`}</span>
    </div>
  );
};