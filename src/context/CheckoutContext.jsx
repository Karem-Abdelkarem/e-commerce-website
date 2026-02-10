import { createContext, useContext, useState } from "react";

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [billingData, setBillingData] = useState();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [checkoutData, setCheckoutData] = useState(null);

  return (
    <CheckoutContext.Provider
      value={{
        billingData,
        setBillingData,
        paymentMethod,
        setPaymentMethod,
        checkoutData,
        setCheckoutData,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCheckout = () => useContext(CheckoutContext);
