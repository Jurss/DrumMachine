import styled from "styled-components";
import GridButton from "./GridButon";
import useSounds from "hooks/useSounds";

export default function Home(){
    const {buttonList} = useSounds();
    return (
        <Wrapper>
            <Grid>
                {buttonList.map(({ soundPlay, isPlayed, id, handleSoundChange }, index) => {
                    return (
                    <GridButton 
                        key={index} 
                        soundPlay={soundPlay} 
                        isPlayed={isPlayed} 
                        id={id}
                        handleSoundChange={handleSoundChange}
                        />
                    )
                })}
            </Grid>
        </Wrapper>
    );
};

const Wrapper = styled.div`
`;

const Grid = styled.div`
    display: grid;
    width: 400px;
    height: 400px;
    border: solid 1px;
    grid-template-columns: 1fr 1fr;
    column-gap: 12px;
    row-gap: 12px;
    padding: 24px;
    margin: auto;
    @media (max-width: 640px){
        width: 300px;
        height: 300px;
    }
`;