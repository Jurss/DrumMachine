import styled from "styled-components";

export default function About(){
    return (
        <Wrapper>
            <div id="name">
                <h2>Hi, I'm Rémi Dutombois</h2>
                <h4>French Web developer</h4>
            </div>
            <div id="description">
                <p>If you are looking for a web developer, you can contact me at this email address: <a href="mailto:remi.dutombois@gmail.com">remi.dutombois@gmail.com</a></p>
                <p>Here is my <a href="https://www.remidutombois.fr/" target="_blank">portfolio</a>,</p>
                <p>And my <a href="https://github.com/Jurss?tab=repositories" target="_blank">Github</a>.</p>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
margin-top: -50px;
`;