import "./App.css";
import CarouselEffect from "./components/Carousel/CarouselEffect";
import Category from "./components/Category/Category";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";

function App() {
  return (
    <>
      <div>
        <Header />
        <CarouselEffect />
        <Category />
        <Product />
      </div>
    </>
  );
}

export default App;
