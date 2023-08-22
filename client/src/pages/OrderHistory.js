import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";

import "./OrderHistory.css";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="">
        {user ? (
          <>
            <h1 className="order-history-heading">Order History</h1>
            {user.orders.map((order) => (
              <div key={order._id} className="">
                <h3 className="order-history-date">
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="order-history-order">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="order-history-product">
                      <Link
                        to={`/products/${_id}`}
                        className="order-history-product-link"
                      >
                        <img alt={name} src={`/images/${image}`} />
                        <p className="order-history-product-name">{name}</p>
                      </Link>
                      <div className="order-history-product-price">
                        <span>AUD {price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default OrderHistory;
