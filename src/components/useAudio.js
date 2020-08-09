import { useState } from "react"

const useAudio = (url) => {
    const [audio] = useState(new Audio(url))
    const [playing, setPlaying] = useState(false)

    const play = () => {
        if (playing) {
            audio.pause()
            audio.play().finally(() => setPlaying(false))
        }
        else {
            setPlaying(true)
            audio.play().finally(() => setPlaying(false))
        }
    }

    return [play]
};

export default useAudio;