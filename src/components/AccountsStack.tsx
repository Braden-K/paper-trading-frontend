import { Account } from "../types/types";
import { AccountListing } from "./AccountListing";

export const AccountsStack = (props: {
  accounts: Account[];
  chosenAccount: Account | null;
}) => {
  return (
    <div className="w-full">
      <h1 className="text-center mb-2">Accounts</h1>
      <div className="rounded-sm shadow-lg">
        {props.accounts.map((account: Account) => {
          return <AccountListing account={account} />;
        })}
      </div>
    </div>
  );
};
