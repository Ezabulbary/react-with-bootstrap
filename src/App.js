import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Carosol from './component/Cart/Carosol/Carosol';
import Cart from './component/Cart/Cart';

function App() {
  return (
    <div className="App">
      <h1>This is bootstrap</h1>
      <Carosol></Carosol>
      <Cart></Cart>
    </div>
  );
}

export default App;
