export const HoldingsTable = () => {
  return (
    <div className="shadow-xl text-size">
      <h1 className="text-center mb-2">Positions</h1>
      <table className="w-full table-fixed text-sm">
        <thead>
          <tr className="border border-gray-700">
            <th>Symbol</th>
            <th>Today's Change</th>
            <th>Price</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-700">
            <td className="text-center">AAPL</td>
            <td className="text-center">2%</td>
            <td className="text-center">$173.18</td>
            <td className="text-center">$1943.09</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
