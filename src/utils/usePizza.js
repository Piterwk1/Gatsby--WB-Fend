import { useState } from 'react';

export default function usePizza({ pizza, inputs }) {
  const [order, setOrder] = useState([]);

  function addToOrder(orderPizza) {
    setOrder([...order, orderPizza]);
  }

  function removeFromOrder(index) {
    setOrder([...order.slice(0, index), ...order.slice(index + 1)]);
  }
  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}