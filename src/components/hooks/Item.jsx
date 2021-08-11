import { useEffect, useState } from "react";
import Body from "./Body"
import Title from "./Title";

const Item = ({ index, color, onClickHandler, isSelected }) => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = (event) => {
        setClickCount(clickCount + 1);

        const selectedItem = { clickCount: clickCount + 1, color }
        //이미 setClickCount를 했으니 여기서는 또 1을 더하지 않아도 되지 않나요?
        // -> setClickCount는 다음 렌더링때 반영이 되고, js 특성상(?) 같은 명령은 마지막 한번만 인식한다.
        //TODO: js의 특성상?

        //호이스팅이 되니 onClickHandler 뒤에 두면 안되나요?
        // -> 호이스팅은 선언만 위로 끌어올리기 때문에 "선언와 초기화가 동시에 이루어 져야 하는" const는 호이스팅이 되지 않는다.

        //color는 텍스트 값인데, 이렇게 객체안에 혼자 덩그러니 두어도 되나요?
        // -> js 문법, color: color를 축약한 것

        onClickHandler({ event, index, selectedItem });
        // 왜 파라미터를 객체분해형식으로 쓰나요? 
        // -> 괄호만 사용하면, 매개변수의 순서를 꼭 지켜야함. 
        // 객체분해형식을 사용하면 순서를 지키지 않아도 됨

    }

    const handleTitleClick = (event) => {
        const { target } = event;
        console.log("Title click!", target.style.fontSize);
    }

    return (
        <li
            className="flex-item"
            style={{
                backgroundColor: color
            }}
            //TODO: 어떤 언어의 문법...?
            //왜 중괄호를 두번 써줘야 하나요?
            // -> 원래는 문법상 아래와 같이 씀
            // const props={
            //          style: {
            //              backgroundColor: "yellow"
            //              } }
            
            //왜 변수명 color에 중괄호 없지?
            // -> 중괄호를 사용한다면 {color: "yellow"}로 인식할 것
            // 텍스트 그대로를 사용해야 하는 위치기 때문에 중괄호 없이 사용

            onClick={handleClick}
        >
            <Title
                name={color}
                // const props = { name: color }
                isSelected={isSelected}
                onClickHandler={handleTitleClick}
            />
            <Body clickCount={clickCount}/>
        </li>
    )
}

export default Item;