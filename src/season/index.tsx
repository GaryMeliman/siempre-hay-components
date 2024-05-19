import React, { useEffect, useState } from "react";
import List from '@mui/material/List';
import Paper from "@mui/material/Paper";
// @ts-ignore
import { isMobile } from "siempre-hay-utils/validations";
import { SeasonProps } from "./index.props";
import { Episode } from "../episode/index.props";
import EpisodeComp from "../episode";

const Season = ({ season }: SeasonProps) => {
// @ts-ignore

    const [episodes, setEpisodes] = useState<undefined | Episode[]>();

    useEffect(() => {
        
        console.log(season);
    }, []);

    //const [season, setSeason] = useState();
    //const [, setUserSeason] = useState(null);

    /*     useEffect(() => {
            const userData = props.userData;
            if (userData) {
                // @ts-ignore
                const currentSeason = props.userData?.find((value: any) => value.id == season?.id);
                if (currentSeason) {
                    setUserSeason(currentSeason)
                }
            }
        }, [season]); */

    /*     useEffect(() => {
            if (props.season) {
                // @ts-ignore
                const currentSeason = props.Seasons.find((season) => season.id === props.season.id);
                setSeason(currentSeason);
            }
        }, [props.season]); */

    return (
        <Paper style={{ maxHeight: isMobile() ? "inherit" : '47vw', overflow: 'auto' }}>
            <List>
                {
                    // @ts-ignore
                    season?.episodes?.map((episode: Episode) => {
                        return (
                            <EpisodeComp episode={episode}  />
                        )
                    })}
            </List>
        </Paper>
    );
}

export default Season;