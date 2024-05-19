import { Episode } from "../episode/index.props";

export interface PlayerProps {
    episode: Episode,
    isPlaying: boolean,
    onBackPress: () => void
}