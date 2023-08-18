import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Button from "../Button/Button";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { useLazyQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Checkout = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const submitCheckout = () => {
    getCheckout({
      variables: {
        products: state.cart.map((product) => ({
          _id: product._id,
          purchaseQuantity: product.purchaseQuantity,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: product.quantity,
          description: product.description,
        })),
      },
    });
  };

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  return (
    <Button onClick={submitCheckout} variant="ghost">
      Proceed to payment
    </Button>
  );
};

export default Checkout;
