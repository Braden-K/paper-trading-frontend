import { AccountsStack } from "../components/AccountsStack";
import { HoldingsTable } from "../components/HoldingsTable";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

export const Home = () => {
  const accounts = useAppSelector((state: RootState) => state.accounts);

  return (
    <div className="w-full h-screen bg-gray-800 justify-center align-middle text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-2 text-white p-4">
          <AccountsStack
            accounts={accounts.accounts}
            chosenAccount={accounts.chosenAccount}
          />
        </div>
        <div className="col-span-8 text-white p-4">
          <HoldingsTable />
        </div>
        <div className="col-span-2 text-white p-4">col 3</div>
      </div>
    </div>
  );
};
