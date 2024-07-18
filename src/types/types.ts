export type User = {
  userId: string;
  username: string;
  accounts: string[];
};

export type Account = {
  dateCreated: string;
  accountName: string;
  holdings: Holding[];
};

export type Transaction = {
  symbol: string;
  quantity: string;
  sharePrice: number;
  timestamp: string;
};

export type Holding = {
  symbol: string;
  transactions: Transaction[];
  totalDollarGain: number;
  totalPercentGain: number;
};

export type ModalStatus = {
  showSearchOptionModal: boolean;
  searchOptionModalSymbol: string;
};

type NumNull = number | null;

export type StockData = {
  currentPrice: NumNull;
  change: NumNull;
  percentChange: NumNull;
  dayHigh: NumNull;
  dayLow: NumNull;
  dayOpen: NumNull;
  prevClose: NumNull;
} | null;
