const Title = ({name, isSelected, onClickHandler}) => {
    const handleClick = (event) => onClickHandler(event);
    // 이건 왜 굳이 한번 더 정의하신건가요?
    // -> convention. 이렇게 해두어야, 후가공이 필요할때에도 편함

    return (
        <h3
            style={{fontSize: `${isSelected ? "30px":"15px"}`}}
            onClick={handleClick}        
        >
            {name}
        </h3>
    )
}

export default Title