import React from "react";
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LinearProgress from '@mui/material/LinearProgress';
import CardActionArea from '@mui/material/CardActionArea';
// @ts-ignore
import TextTruncate from 'react-text-truncate';
// @ts-ignore
import { isMobile } from "siempre-hay-utils/validations";
import { EpisodeProps } from "./index.props";
import { useDispatch } from "react-redux";
// @ts-ignore
import { setPlayer } from "siempre-hay-redux/playerSlice";

const Episode = ({ episode }: EpisodeProps) => {

    const dispatch = useDispatch();

    return (
        <ListItem onClick={() => dispatch(setPlayer({ episode, isPlaying: true }))} disabled={!episode.enabled} style={{ width: isMobile() ? "100%" : "50%", display: "flex", float: "left", padding: 3 }} key={episode.id} disablePadding>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image={`https://image.tmdb.org/t/p/original${episode.still_path}`}
                        alt={episode.name}
                    />
                    <LinearProgress variant="determinate" value={100} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {episode.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <TextTruncate
                                line={2}
                                element="span"
                                truncateText="…"
                                text={episode.overview}
                                textTruncateChild={<a href="#">Ver más</a>}
                            />
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </ListItem>
    )
}

export default Episode;