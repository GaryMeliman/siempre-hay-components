import React from "react";
import Stories from 'stories-react';
import 'stories-react/dist/index.css';
// @ts-ignore
import { isMobile } from "siempre-hay-utils/validations";
import { StoriesProps } from "./index.props";

const StoriesComp = ({ stories, position = "left", width = "30vw" }: StoriesProps) => {
    return (
        <Stories style={{ float: position }} width={width} height="100vh" stories={stories} />
    )
}

export default StoriesComp;