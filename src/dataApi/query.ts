import { BASE_URL, TOKEN_PARAM } from "./constants";

export const fetchPriceInfo = async (symbol: string) => {
  const url: URL = new URL(
    `/api/v1/quote?symbol=${symbol}&${TOKEN_PARAM}`,
    BASE_URL
  );
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error: any) {
    throw new Error(`No response status returned: ${error.message}`);
  }
};
