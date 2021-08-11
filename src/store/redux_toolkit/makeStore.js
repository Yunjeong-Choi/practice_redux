import { configureStore } from "@reduxjs/toolkit";
import socksColor from "./counter"

//왜 바로 변수 store를 선언하지 않고, makeStore 안에 함수로 넣었지?
const makeStore = () => {
    const store = configureStore({
        reducer: { socksColor },
        devTools: process.env.NODE_ENV == "development",
        middleware: []
    });

    return store;
}

export default makeStore;