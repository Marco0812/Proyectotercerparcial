import React, { useState } from 'react';

const Total = ({ total, handlePayment }) => {
  const [paid, setPaid] = useState(false);

  const handlePay = () => {
    setPaid(true);
    handlePayment();
  };

  return (
    <div className="total">
      {!paid ? (
        <>
          <h3>Total a pagar: ${total.toFixed(2)}</h3>
          <button onClick={handlePay}>Pagar</button>
        </>
      ) : (
        <h3>Su pago se ha realizado exitosamente, muchas Gracias!</h3>
      )}
    </div>
  );
};

export default Total;