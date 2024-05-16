import { Provider } from "react-redux";
import Body from "./components/Body"
import store from "./utils/store";

function App() {
  return ( 
    <div className="bg-black">
    <Provider store={store}> 
     <Body/>
    </Provider>
    </div>
  );
}

export default App;
