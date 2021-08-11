import "./App.css";
// INFO: Hooks
import List from "./components/hooks/List";
// INFO: Redux-toolkit
import { Provider } from "react-redux";
import store from "./store/redux_toolkit/store";
import Counter from "./components/redux_toolkit/Counter";
// import InCounter from "./components/myRedux/InCounter";

const App = () => {
  return (
    <>
      <h1>오늘 내 양말 색깔은?</h1>
      <List />
      <hr />
      {/* INFO: 구분선 긋기 */}
      <h1>Redux_Toolkit</h1>
      <Provider store={store}>
        <Counter />
      </Provider>
      <hr />
      {/* <h1>MyRedux</h1>
      <InCounter /> */}
    </>
  );
};

export default App;