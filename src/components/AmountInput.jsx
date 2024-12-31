const AmountInput = ({ value, handleAmountChange }) => (
    <div>
      <p className="text-sm font-medium mb-2">Enter Amount</p>
      <input
        id="amount"
        type="number"
        className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={handleAmountChange}
      />
    </div>
  );

  export default AmountInput;