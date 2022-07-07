import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Info from "./components/info/Info";

function App() {
  return (
    <div className="container">
      <div className="appContainer">
        <Info></Info>
        <About></About>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
