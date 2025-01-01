const CurrencyDropdown = ({ label, id, imgSrc, value, countryList, handleInputChange }) => (
  <div className="w-1/3">
    <p className="text-sm font-medium mb-2">{label}</p>
    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 py-2">
      <img src={imgSrc} alt={`${label} Currency`} className="w-8 h-8" />
      <select
        id={id}
        name={id}
        className="w-full bg-transparent focus:outline-none"
        value={value}
        onChange={handleInputChange}
      >
        {Object.keys(countryList).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default CurrencyDropdown;
