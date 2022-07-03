import "./App.css";
import { ShoppinProvider } from "./context/Shopping/ShoppingState";
import Home from "./pages/Home";
import Header from "./pages/header";

function App() {
  return (
    <ShoppinProvider>
      <div classNameName="container p-4">
        <Header />
        <Home />
      </div>
    </ShoppinProvider>
  );
}

export default App;
