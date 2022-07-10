import "./App.css";
import { ShoppinProvider } from "./context/Shopping/ShoppingState";
import Header from "./pages/Header";
import Home from "./pages/Home";

function App() {
  return (
    <ShoppinProvider>
      <Header />
      <div className="container py-5">
        <Home />
      </div>
    </ShoppinProvider>
  );
}

export default App;
