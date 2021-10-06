import styled from "styled-components";

export default function Header(){
    return (
        <Wrapper>
            <p>Footer</p>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: solid 1px;
`;