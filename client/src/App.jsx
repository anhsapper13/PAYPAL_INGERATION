import {PayPalScriptProvider} from "@paypal/react-paypal-js"

function App() {
  const options = {
    "client-id":"",
    vault:"",
    intent:"capture",
    currency:"USD"
  }
  return (
    <PayPalScriptProvider
    options={options}
    >
    hhi
    </PayPalScriptProvider>
  )
}

export default App
