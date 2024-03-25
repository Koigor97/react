// Test ID: IIDSAT, CQE92U
import { useLoaderData } from "react-router-dom";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import OrderItem from "./OrderItem";

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

function Order() {
  const order = useLoaderData();

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className=" py-6 px-4 space-y-8">
      <div className=" flex items-center justify-between flex-wrap gap-2">
        <h2 className=" text-xl font-semibold">Order #{id} status</h2>

        <div className=" space-x-2">
          {priority && <span className=" bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide rounded-full text-slate-50">Priority</span>}
          <span className=" bg-orange-700 px-3 py-1 text-sm font-semibold uppercase tracking-wide rounded-full text-slate-50">{status} order</span>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-2 bg-stone-200 px-6 py-5">
        <p className=" font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className=" text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

        <ul>
          {cart.map(item => <OrderItem item={item} key={item.id}/>)}
        </ul>

      <div className=" space-y-2 bg-stone-200 px-6 py-5">
        <p className=" text-xs text-stone-600 font-medium">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-xs text-stone-600 font-medium">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className=" font-bold">To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export default Order;
