import AmountInput from './AmountInput';
import CurrencyDropdown from './CurrencyDropdown';
import ConversionResult from './ConversionResult';
import ConvertButton from './ConvertButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CountryList from '../CountryList';
import { useEffect, useState } from 'react';

const ConversionForm = () => {

  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('PKR');
  const [fromFlag, setFromFlag] = useState("https://flagsapi.com/US/flat/64.png");
  const [toFlag, setToFlag] = useState("https://flagsapi.com/PK/flat/64.png");

  const [exchangeRate, setExchangeRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    id === 'from' ? setFromCurrency(value) : setToCurrency(value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleConvert = async (e) => {
    e.preventDefault();
  
    if (amount === 0) {
      setResult("Please enter a valid amount");
    } else {
      try {
        let response = await fetch(
          `https://v6.exchangerate-api.com/v6/630cfcee0b8f98159f361200/pair/${fromCurrency}/${toCurrency}`
        );
        let data = await response.json();
        
        if (data.result === "success") {
          const rate = data.conversion_rate;
          setExchangeRate(rate);
          const calculatedAmount = amount * rate;
          setConvertedAmount(calculatedAmount);
          setResult(`${amount} ${fromCurrency} = ${calculatedAmount} ${toCurrency}`);
        } else {
          setResult("Failed to fetch exchange rate. Please try again.");
        }
      } catch (error) {
        setResult("An error occurred. Please try again.");
      }
    }
  };
  

    const handleSwapCurrencies = async () => {
 
      setFromCurrency(toCurrency);
      setToCurrency(fromCurrency);
    
      let response = await fetch(
        `https://v6.exchangerate-api.com/v6/630cfcee0b8f98159f361200/pair/${toCurrency}/${fromCurrency}`
      );
      let data = await response.json();
    
      setExchangeRate(data.conversion_rate);
      const swappedConvertedAmount = amount * data.conversion_rate;
      setConvertedAmount(swappedConvertedAmount);
      setResult(`${amount} ${toCurrency} = ${swappedConvertedAmount} ${fromCurrency}`);
    };
    

    useEffect(() => {
      
      const handleFlagIcons = () => {
          let responseFrom = `https://flagsapi.com/${CountryList[fromCurrency]}/flat/64.png`;
          let responseTo = `https://flagsapi.com/${CountryList[toCurrency]}/flat/64.png`;

        setFromFlag(responseFrom)
        setToFlag(responseTo)

      }

      handleFlagIcons()

    }, [fromCurrency, toCurrency])

    

  return (
    <form id="currency-form" className="space-y-6">
      <AmountInput value={amount} handleAmountChange={handleAmountChange} />

      <div className="flex items-center justify-between">
        <CurrencyDropdown
          label="From"
          id="from"
          imgSrc={fromFlag}
          defaultValue={fromCurrency}
          countryList={CountryList}
          handleInputChange={handleInputChange}
        />

        <FontAwesomeIcon
          icon={faArrowRightArrowLeft}
          className="text-gray-500 text-xl mx-4 cursor-pointer"
          onClick={handleSwapCurrencies}
        />

        <CurrencyDropdown
          label="To"
          id="to"
          imgSrc={toFlag}
          defaultValue={toCurrency}
          countryList={CountryList}
          handleInputChange={handleInputChange}
        />
      </div>

      <ConversionResult result={result} />
      <ConvertButton handleConvert={handleConvert} />
    </form>
  );
};

export default ConversionForm;