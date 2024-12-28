import { PayPalButtons } from "@paypal/react-paypal-js";
const PaypalButtonComponent = () => {
  const handleCreateSubscription = () => {
    console.log("Create Subscription");
  };
  return (
    <div>
      <PayPalButtons
        style={{
          shape: "pill",
          layout: "vertical",
          color: "gold",
          label: "buynow",
          tagline: "true",
        }}
        createSubscription={handleCreateSubscription}
        onApprove={() => {}}
      ></PayPalButtons>
    </div>
  );
};

export default PaypalButtonComponent;
