import React, { useState, useEffect } from "react";
import Row from "../../components/Row";
import { generatePrimeNumbersToVal, checkValueIsNumber } from "../../utils/helpers";

const App = () => {
  const [noOfPrimes, setNoOfPrimes] = useState(10);
  const [primes, setPrimes] = useState([]);

  useEffect(() => {
    setPrimes(generatePrimeNumbersToVal(10));
  }, []);

  const handleInputChange = e => {
    const { value } = e.target;
    if (checkValueIsNumber(value) && Number(value) <= 101) {
      setPrimes(generatePrimeNumbersToVal(Number(value), primes));
      setNoOfPrimes(Number(value));
    }
  };

  return (
    <div className="home">
      <div className="form-group">
        <label> Enter length of table to generate </label>
        <input onChange={handleInputChange} type="number" min='5' max='100' defaultValue={noOfPrimes} />
        <span className="description">between 0 - 100</span>
      </div>
      <table>
        <thead>
          <Row primeNumberHeaderArray={primes} type="header" />
        </thead>
        <tbody>
          {primes.map(prime => (
            <Row
              key={prime}
              primeNumberIndex={prime}
              primeNumberHeaderArray={primes}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
