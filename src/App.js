import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="App">
      <h1 className="heading">the DICTIONARY app</h1>
      <Dictionary className="dictionary" />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
