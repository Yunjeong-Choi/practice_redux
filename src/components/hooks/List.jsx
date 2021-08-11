import data from "../../data.json";
import { useEffect, useState } from "react";
import Item from "./Item";
import { storageKey } from "../../common/storage";

const List = () => {
    const [totalCount, setTotalCount] = useState(0);
    const [bestColor, setBestColor] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [colorStorage, setColorStorage] = useState({});

    const handelItemClick = (event,index,selectedItem) => {
        setTotalCount(totalCount + 1);
        // INFO: 값을 넘기는 것과 함수를 넘기는 것의 차이 이해 ???
        // setClickCount(clickCount + 1);
        // setClickCount((prev) => prev + 1);
        // setClickCount((prev) => prev + 1);        

        setSelectedIndex(index);

        localStorage.setItem(storageKey.selectedIndex, index);
    
        const selectedColor = {
            [selectedItem.color]: selectedItem.clickCount
        }

        const storedColors = { ...colorStorage, ...selectedColor }
        setColorStorage(storedColors)

        const entries = Object.entries(storedColors);
        const curBestColor = entries.reduce(
            (acc,cur)=> {
                const [colorKey, clickCount, ...remains] = cur; //이건 무슨 형식인고,,, 객체분해, 배열의 분해
                // remains = [index2, index3, ...];

                if (acc.maxValue < clickCount) {
                    acc.color = colorKey;
                    acc.maxValue = clickCount;
                }
                return acc
            },
            {color: undefined, maxValue: 0} //초기값 형식 지정! ???
        )

        setBestColor(curBestColor.color);

        const { target, currentTarget } = event;
        console.log(`Index: ${index}`, target);
        console.log(`Index: ${index}`, currentTarget);
    }

    useEffect(() => {
        const selectedIndex = Number( //숫자처리를 해주지 않으면 작동 안함
            localStorage.getItem(storageKey.selectedIndex) || 0
        )
        setSelectedIndex(selectedIndex)

        // //이건 꼭 필요한 건 아닌가요?
        // 그리고 최초 처음부터 세팅이 필요한거라면 useEffect가 아닌 처음 그릴때에부터 이렇게 정의가 되어있으면 되지요?
        const preCount = Number(localStorage.getItem(storageKey.refreshCount) || 0)
        localStorage.setItem(storageKey.refreshCount, preCount + 1)
         
        // const refinedColors = data.list.reduce((acc, cur) => {
        //     return { ...acc, [cur.color]: 0 };
        // }, {});
        // setColorStorage(refinedColors);

        //최초값에 해당하는 것은 useEffect에 넣는다.

    },[])

    return (
        <>
            <div>
                <div>Total count: {totalCount}</div>
                <div>Best color: {bestColor}</div>
            </div>
            <ul className="flex-container">
                {data.list.map((item, index) => {
                    const { color } = item;
                    return (
                        <Item
                            key={index}
                            color={color}
                            index={index}
                            onClickHandler={handelItemClick}
                            isSelected={index === selectedIndex}
                            totalCount={totalCount}
                        />
                    )
                })}
            </ul>
        </>
    )
}

export default List;