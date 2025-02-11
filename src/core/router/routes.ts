export const routesPrefixes = {
    accountList: "/account-list",
    transfer: "/transfer",
    movements: "/movements",
    newAccount: "/new-account",
};

export const appRoutes = {
    root: "/",
    accountList: routesPrefixes.accountList,
    editAccount: "/edit-account/:id",
    movements: "/movements/:id",
    transfer: routesPrefixes.transfer,
    transferFromAccount: `${routesPrefixes.transfer}/:id`,
    newAccount: routesPrefixes.newAccount,
};