const ConvertButton = ({ handleConvert }) => (
    <button
      id="convert-button"
      type="submit"
      className="w-full h-12 bg-pink-600 text-white text-lg font-medium rounded-lg hover:bg-pink-700 transition duration-200"
      onClick={handleConvert}
    >
      Get Exchange Rate
    </button>
  );

  export default ConvertButton;