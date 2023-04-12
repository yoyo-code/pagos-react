import { useState } from "react";
import { MP_TOKEN } from "../config";

const Mercadopago = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleCalculate = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  console.log(MP_TOKEN);

  return (
    <div>
      <h1>Esto es MercadoPago</h1>
      <div>
        <input type="number" value={num1} onChange={handleNum1Change} />
        <input type="number" value={num2} onChange={handleNum2Change} />
        <button onClick={handleCalculate}>Calcular</button>
      </div>
      {result && <p>El resultado es: {result}</p>}
    </div>
  );
};

export default Mercadopago;
