import { Provider } from "react-redux";
import Footer from "./Component/Footer/Footer.js";
import Navbar from "./Component/Navbar/Navbar.js";
import { Store } from './Component/Store.js';
function App() {
  return (
    <div>
        <Provider store={Store}>
          <Navbar/>
              <Routing/>
          <Footer/>    
        </Provider>
    </div>
  );
}

export default App;
