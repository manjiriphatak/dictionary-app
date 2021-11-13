import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
export default function App() {
  return (
    <div className="App">
      <h1 className="heading">the DICTIONARY app</h1>
      <Dictionary className="dictionary" defaultKeyword="Dictionary" />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
