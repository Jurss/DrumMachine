import styled from "styled-components";

export default function Header({isLight, handleToggleTheme}){
    return (
        <Wrapper>
            <button onClick={handleToggleTheme}>Switch to {isLight ? "light" : "dark"} Theme</button>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: solid 1px;
    background-color: ${props=>props.theme.mainColor};
`;