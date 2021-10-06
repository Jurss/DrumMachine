import styled from "styled-components";

export default function Header({isLight, handleToggleTheme}){
    return (
        <Wrapper>
            <h1>Our super music app</h1>
            <button onClick={handleToggleTheme}>Switch to {isLight ? "light" : "dark"} Theme</button>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
    border-bottom: solid 1px;
`;