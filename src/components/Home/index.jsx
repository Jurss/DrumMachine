import styled from "styled-components";
import GridButton from "./GridButon";
import useSounds from "hooks/useSounds";

export default function Home(){
    const {buttonList} = useSounds();
    return (
        <Wrapper>
            <P>Click on 🎵 to change sample</P>
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
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const P = styled.p`
    margin-bottom: 12px;
`;

const Grid = styled.div`
    display: grid;
    width: 400px;
    height: 400px;
    grid-template-columns: 1fr 1fr;
    column-gap: 12px;
    row-gap: 12px;
    margin: auto;
    @media (max-width: 640px){
        width: 300px;
        height: 300px;
    }
    @media (max-width: 330px){
        width: 250px;
        height: 250px;
    }
`;