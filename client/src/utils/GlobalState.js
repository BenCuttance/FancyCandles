import React, { createContext, useContext } from "react";
import { useProductReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    user: null,
    products: [],
    currentProduct: {},
    cart: [
      {
        _id: "adscvdsds",
        name: "Bedroom Candle",
        description:
          "Transform your bedroom into a cozy oasis with our enchanting Bedroom Candle. Crafted with a soothing blend of lavender and vanilla, this hand-poured soy candle creates an ambiance of relaxation and tranquility. Whether you are winding down after a long day or setting the mood for a peaceful evening, the gentle flicker of this candle will add a touch of warmth to your space. Elevate your bedroom experience with the calming fragrance and gentle glow of our Bedroom Candle.",
        image: "Candle-bedroom.jpg",
        category: "123123",
        price: 12.99,
        quantity: 500,
        purchaseQuantity: 2,
      },
    ],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
