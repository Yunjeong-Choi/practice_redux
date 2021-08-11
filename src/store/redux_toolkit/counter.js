import { createSlice } from "@reduxjs/toolkit";

//export counterSlice
//이건 해줘야 하나?
const counterSlice = createSlice({
    name: "socksColor",
    initialState: {
        number: 0,
        name: "yellow" //왜 마지막 콤마를 남겨두셨나요? 의미가 있나요?
    },
    reducers: {
        increment: (state) => {
            state.number += 1;
        },
        decrement: (state) => {
            state.number -= 1;
        }
    }
});

export const { increment, decrement } = counterSlice.actions;

export const counterSelector = (state) => state.socksColor.number;
export const nameSelector = (state) => state.socksColor.name;
//왜 같은 파일에 있는데 state.number라고 안하고 counter가 중간에 끼어들어가지?
//하나의 파일에도 여러개의 모듈을 묶어둘 수 있나?

//export const { increment, decrement } = counterSlice.actions;
//export default counterSlice.reducer;
//actions와 reducer가 어디서 나오는것인지 알고싶다. counterSlice를 실행시키면 결과물은 어떤 모습인지 어떻게 확인하는가?

//왜 export할때에 named와 default를 함께 사용하셨는지..?

export default counterSlice.reducer;
//export default counterSlice.reducer;
// export 액션 익스포트를 했는데 default 를 또 하는 이유는?