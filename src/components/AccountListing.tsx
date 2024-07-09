import { Account } from "../types/types";
import { useAppDispatch } from "../redux/hooks";
import { setChosenAccount } from "../redux/accountSlice";

export const AccountListing = (props: { account: Account }) => {
  const dispatch = useAppDispatch();

  const onChooseAccount = () => {
    dispatch(setChosenAccount(props.account));
  };

  return (
    <div onClick={onChooseAccount} className="border border-gray-700">
      <div className="text-bold ml-2">{props.account.accountName}</div>
      <div className="text-sm text-gray-400 ml-2">
        {props.account.dateCreated}
      </div>
    </div>
  );
};
