import "./App.css";
import { ShoppinProvider } from "./context/Shopping/ShoppingState";
import Home from "./pages/Home";

function App() {
  return (
    <ShoppinProvider>
      <div classNameName="container px-4">
        <Home />
      </div>
    </ShoppinProvider>
  );
}

export default App;
