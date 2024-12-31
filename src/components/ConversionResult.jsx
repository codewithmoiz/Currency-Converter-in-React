const ConversionResult = ({ result }) => {
  return (
    <div
      id="conversion-result"
      className="bg-gray-100 text-gray-800 px-6 py-4 rounded-lg shadow-md max-w-lg mx-auto mt-6 border border-gray-300"
    >
      <h2 className="text-lg font-semibold text-center">Conversion Rate</h2>
      <p className="text-base text-center mt-2">
        {result || "Enter an amount and select currencies to see the conversion result."}
      </p>
    </div>
  );
};

export default ConversionResult;
