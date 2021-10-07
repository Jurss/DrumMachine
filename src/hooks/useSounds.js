import { useEffect, useRef } from "react";
import * as Tone from "tone";

import kick from "assets/sounds/Kick.wav";
import CHH from "assets/sounds/CHH1.wav";
import perc from "assets/sounds/Perc1.wav";
import snare from "assets/sounds/Snare1.wav";

export default function useSounds() {
    const mySampler = useRef(null);
    useEffect(() => {
        const sampler = new Tone.Sampler({
            C4: kick,
            "D#4": CHH,
            "F#4": perc,
            A4: snare,
        }).toDestination();

        Tone.loaded().then(() => {
            mySampler.current = sampler;
        });
    }, []);

    function soundPlay(note) {
        mySampler.current.triggerAttackRelease([note], 4)
    };

    function handleKeyDown({ key }) {
        switch (key) {
            case "a":
                soundPlay("C4");
                break;
            case "z":
                soundPlay("D#4");
                break;
            case "e":
                soundPlay("F#4");
                break;
            case "r":
                soundPlay("A4");
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => { window.removeEventListener("keydown", handleKeyDown) };
    });
    const buttonList = [
        { soundPlay: () => soundPlay("C4"), },
        { soundPlay: () => soundPlay("D#4"), },
        { soundPlay: () => soundPlay("F#4"), },
        { soundPlay: () => soundPlay("A4"), },
    ];
    return { buttonList };
}