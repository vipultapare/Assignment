import { Provider } from "react-redux";
import Body from "./Components/Body";
import appStore from "./Utils/Redux/appStore";

function App() {
  return (
    <Provider store={appStore}>
    <div className="App">
      <Body />
    </div>
    </Provider>
  );
}

export default App;
