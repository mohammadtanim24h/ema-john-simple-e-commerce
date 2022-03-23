import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Header></Header>
            <Shop></Shop>
        </div>
    );
}

export default App;
