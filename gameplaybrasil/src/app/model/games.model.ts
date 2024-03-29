export interface GamesModel {
    count: number
    next: string
    previous: string
    results: Result[]
}

export interface Result {
    id: number
    slug: string
    name: string
    released: string
    tba: boolean
    background_image: string
    rating: number
    rating_top: number
    ratings: Ratings
    ratings_count: number
    reviews_text_count: string
    added: number
    added_by_status: AddedByStatus
    metacritic: number
    playtime: number
    suggestions_count: number
    updated: string
    esrb_rating: EsrbRating
    platforms: Platform[]
}

export interface Ratings { }

export interface AddedByStatus { }

export interface EsrbRating {
    id: number
    slug: string
    name: string
}

export interface Platform {
    platform: Platform2
    released_at: string
    requirements: Requirements
}

export interface Platform2 {
    id: number,
    slug: string,
    name: string,
    image: any,
    imgSvg: imgSvg2[],
}

export interface Requirements {
    minimum: string
    recommended: string
}

export interface imgSvg2 {
    plastation: string,
    xbox: string,
    pc: string
}