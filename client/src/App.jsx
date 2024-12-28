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
    
    </PayPalScriptProvider>
  )
}

export default App
