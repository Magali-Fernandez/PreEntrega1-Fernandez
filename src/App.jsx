import "./App.css";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navbar from "./components/navbar/navbar";

function App() {
    return (
        <>
            <Navbar />
            <ItemListContainer greeting="¡Bienvenido a Hogaria!" />
        </>
    );
}

export default App;
