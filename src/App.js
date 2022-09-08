import "./App.css";
import Food from "./components/food/Food";
import Home from "./components/Home";
import Navs from "./components/Nav/Nav";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Navs></Navs>
      <Home></Home>
      <Food></Food>
      <Footer></Footer>
    </div>
  );
}

export default App;
