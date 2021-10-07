import { useState, useEffect, useRef } from "react";
import * as Tone from "tone";

import kick from "assets/sounds/Kick.wav";
import CHH from "assets/sounds/CHH1.wav";
import perc from "assets/sounds/Perc1.wav";
import snare from "assets/sounds/Snare1.wav";

export default function useSounds() {

    const [isKickPlayed, isKickChanged] = useState();
    const [isCHHPlayed, isCHHChanged] = useState();
    const [isPercPlayed, isPercChanged] = useState();
    const [isSnarePlayed, isSnareChanged] = useState();

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
                isKickChanged(true);
                window.setTimeout(() => { isKickChanged(false) }, 300);
                break;
            case "z":
                soundPlay("D#4");
                isCHHChanged(true);
                window.setTimeout(() => { isCHHChanged(false) }, 300);
                break;
            case "e":
                soundPlay("F#4");
                isPercChanged(true);
                window.setTimeout(() => { isPercChanged(false) }, 300);
                break;
            case "r":
                soundPlay("A4");
                isSnareChanged(true);
                window.setTimeout(() => { isSnareChanged(false) }, 300);
                break;
            default:
                break;
        }
    }
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => { window.removeEventListener("keydown", handleKeyDown) };
    });

    function handleSoundChange(note, file) {
        let fileURL = URL.createObjectURL(file);
        let buffer = new Tone.Buffer(fileURL);
        mySampler.current.add(note, buffer, () => alert('Sound Succeffully Added !'))
    };

    const buttonList = [{
            soundPlay: () => soundPlay("C4"),
            isPlayed: isKickPlayed,
            id: "kick",
            handleSoundChange: (e) => handleSoundChange("C4", e.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("D#4"),
            isPlayed: isCHHPlayed,
            id: "CHH",
            handleSoundChange: (e) => handleSoundChange("D#4", e.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("F#4"),
            isPlayed: isPercPlayed,
            id: "Perc",
            handleSoundChange: (e) => handleSoundChange("F#4", e.target.files[0]),
        },
        {
            soundPlay: () => soundPlay("A4"),
            isPlayed: isSnarePlayed,
            id: "Snare",
            handleSoundChange: (e) => handleSoundChange("A4", e.target.files[0]),
        },
    ];
    return { buttonList };
}