import { Seasons } from "../episode/index.props"

export interface ShowProps {
    show: Show,
    seasons: any,
    width: string,
    position: "left" | "right"
}

interface Show {
    adult: boolean
    backdrop_path: string
    created_by: CreatedBy[]
    episode_run_time: number[]
    first_air_date: string
    genres: Genre[]
    homepage: string
    id: number
    in_production: boolean
    languages: string[]
    last_air_date: string
    last_episode_to_air: LastEpisodeToAir
    name: string
    next_episode_to_air: any
    networks: Network[]
    number_of_episodes: number
    number_of_seasons: number
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    seasons: SeasonData[]
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
    type: string
    vote_average: number
    vote_count: number
}

interface CreatedBy {
    id: number
    credit_id: string
    name: string
    gender: number
    profile_path: string
}

interface Genre {
    id: number
    name: string
}

interface LastEpisodeToAir {
    id: number
    name: string
    overview: string
    vote_average: number
    vote_count: number
    air_date: string
    episode_number: number
    episode_type: string
    production_code: string
    runtime: number
    season_number: number
    show_id: number
    still_path: string
}

interface Network {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

interface ProductionCompany {
    id: number
    logo_path?: string
    name: string
    origin_country: string
}

interface ProductionCountry {
    iso_3166_1: string
    name: string
}

interface SeasonData {
    air_date: string
    episode_translated_count: number
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string
    season_number: number
    vote_average: number
    enabled?: boolean
}

interface SpokenLanguage {
    english_name: string
    iso_639_1: string
    name: string
}