import React, { useEffect, useState } from "react";
//import ReactPlayer from "react-player";
import IconButton from "@mui/material/IconButton";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { PlayerProps } from "./index.props";
import { default as _ReactPlayer } from 'react-player/lazy';
import { ReactPlayerProps } from "react-player/types/lib";
const ReactPlayer = _ReactPlayer as unknown as React.FC<ReactPlayerProps>;
import "./index.css"
import { useDispatch } from "react-redux";
// @ts-ignore
import { setPlayer } from "siempre-hay-redux/playerSlice";
// @ts-ignore
import srtParser2 from "srt-parser-2";

// @ts-ignore
const Player = ({ episode, isPlaying }: PlayerProps) => {
    const [subtitles, setSubtitles] = useState<{
        id: string;
        startTime: string;
        startSeconds: number;
        endTime: string;
        endSeconds: number;
        text: string;
    }[]>([]);
    const [currentTime, setCurrentTime] = useState(0);
    const dispatch = useDispatch();
    const [currentSubtitle, setCurrentSubtitle] = useState<{
        id: string;
        startTime: string;
        startSeconds: number;
        endTime: string;
        endSeconds: number;
        text: string;
    } | null>(null);

    useEffect(() => {
        loadSubtitles();
        console.log(episode);
    }, []);

    useEffect(() => {
        // Buscar el subtítulo correspondiente al tiempo actual del video
        const subtitle = subtitles.find(sub => currentTime >= sub.startSeconds && currentTime <= sub.endSeconds);
        if (subtitle !== undefined) {
            setCurrentSubtitle(subtitle);
        } else {
            setCurrentSubtitle(null)
        }
    }, [currentTime, subtitles]);

    const loadSubtitles = () => {
        fetch(episode.vtt)
            .then(response => response.text())
            .then(text => {
                const parser = new srtParser2();
                const parsedSubtitles = parser.fromSrt(text);
                console.log(parsedSubtitles);
                
                setSubtitles(parsedSubtitles);
            })
            .catch(error => console.error('Error loading subtitles:', error));
    };


    const handleBackPress = () => {
        dispatch(setPlayer({ isPlaying: false, episode: {} }))
    }

    return (
        <div className="PlayerWrapper" style={{
            width: "100%",
            height: "100vh",
            overflow: "hidden"
        }}>
            <IconButton color="primary" onClick={handleBackPress} style={{ position: "fixed", marginTop: 65, zIndex: 99999, left: 10 }} aria-label="atras">
                <ArrowBack />
            </IconButton>
            <ReactPlayer
                url={episode?.url}
                config={{
                    file: {
                        attributes: {
                            crossOrigin: "anonymous",
                        },
                        tracks: [{
                            kind: 'subtitles',
                            src: episode?.vtt,
                            srcLang: 'es',
                            default: true,
                            label: "showing",
                            //mode: 'showing',
                        }],
                    }
                }}
                onError={(error: any, data: any, instance: any, hlsGlobal: any) => console.log(error, data, instance, hlsGlobal)}
                controls
                width="100%"
                height="99.4vh"
                onProgress={({ playedSeconds }) => setCurrentTime(playedSeconds)}
            />
            <div style={{ position: "fixed", margin: 60, zIndex: 99999, bottom: "2%", width: "100%" }}>
                <span style={{
                    background: "rgba(8, 8, 8, 0.75)",
                    fontSize: 26,
                    color: "rgb(255, 255, 255)",
                    fill: "rgb(255, 255, 255)"
                }}>{currentSubtitle?.text}</span>
            </div>
        </div>
    );
}

// @ts-ignore
const parseVtt = (vttText: string) => {
    const subtitleBlocks = vttText.split('\n\n');
    return subtitleBlocks.map(block => {
        const [time, ...textLines] = block.split('\n');
        const [start, end] = time.split(' --> ').map(timeString => {
            const [hh, mm, ss] = timeString.split(':').map(parseFloat);
            return hh * 3600 + mm * 60 + ss;
        });
        const text = textLines.join('\n');
        return { start, end, text };
    });
};


export default Player;
