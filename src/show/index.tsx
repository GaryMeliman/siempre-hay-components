import React, { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import './index.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// @ts-ignore
import { isMobile } from "siempre-hay-utils/validations";
import { SeasonData, ShowProps } from "./index.props";
import Season from "../season";

const Show = ({ show, position = "right", width = "69vw", seasons }: ShowProps) => {
    const [currentSeason, setCurrentSeason] = useState<undefined | SeasonData>();
    const [currentSeasonTab, setCurrentSeasonTab] = useState(1);
    useEffect(() => {        
        setCurrentSeason(seasons[1]);
    }, []);

    useEffect(() => {
        console.log(currentSeasonTab);
    }, [currentSeasonTab]);

    //const [setAlignment] = useState('left');
    /*     
        const [userSeasonData, setUserSeasonData] = useState();
    

    
        useEffect(() => {
            if (props.userData) {
                setUserSeasonData(props.userData);
            }
        }, [props]);
    
        const handleAlignment = (_event: any, newAlignment: any) => {
            const season = props.Show.seasons.find((s: any) => s.name === newAlignment);
            setCurrentSeason(season);
            //setAlignment(newAlignment);
        }; */

    const showContainerCss = {
        paddingInline: "10px",
        width: width,
        height: "100vh",
        float: position,
        top: "4px",
        position: "absolute",
        right: 0,
        overflow: "hidden",
    }

    return (
        // @ts-ignore
        <div style={showContainerCss}>
            <Paper>
                <ToggleButtonGroup
                    size="small"
                    value={currentSeasonTab}
                    exclusive
                    color="primary"
                    // onChange={handleAlignment}
                    style={{ width: "100%" }}
                    autoFocus={true}
                    fullWidth={true}
                >
                    <ToggleButton style={{ display: isMobile() ? "none" : "inherit" }} value={0} disabled>
                        Temporadas
                    </ToggleButton>
                    {
                        show.seasons.map((season, index) => {
                            return (
                                <ToggleButton  onClick={() => {
                                    setCurrentSeasonTab(index);
                                    setCurrentSeason(seasons[index]);
                                }} value={index} key={season.id} >
                                    {season.season_number}
                                </ToggleButton>
                            )
                        })
                    }
                </ToggleButtonGroup>
                <Season season={currentSeason} />
            </Paper>
        </div >
    )
}

// function splitArray(array: any, partes: any) {
//     const longitudParte = Math.ceil(array.length / partes);
//     const partesArray = [];
//     for (let i = 0; i < array.length; i += longitudParte) {
//         partesArray.push(array.slice(i, i + longitudParte));
//     }
//     return partesArray;
// }

export default Show;
