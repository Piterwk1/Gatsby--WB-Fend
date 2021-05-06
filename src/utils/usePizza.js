import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';

export default function usePizza({ pizza, inputs }) {
  // moved useState up to provider

  //   const [order, setOrder] = useState([]);
  // acces state and setOrder via context
  const [order, setOrder] = useContext(OrderContext);

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
