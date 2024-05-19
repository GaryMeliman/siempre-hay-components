export interface StoriesProps {
    stories: {
        type: string,
        url: string,
        duration: string
    }[],
    width: string,
    height: string,
    position: "left" | "rigth" | string
}