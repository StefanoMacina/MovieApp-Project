
// !! cambiare nome in Film !!
export interface films {
    id : string,
    title : string,
    year : number
    runningTime : number,
    genres? : string,
    cast? : Cast [],
    rating : Rating,
    country? : FilmCountry []
    
}

export interface Rating{
    averageRating : number,
    numVotes : number
}

export interface FilmForm{
    id : string,
    title : string,
    year : number,
    runningTime : number,
    genres? : string,
    averageRating : number,
    numVotes : number
}

export interface FilmCountry{
    title : string,

    //these must be enum
    region? : string,
    language? : string
}

export interface Cast{
    celebrityName: string,
    celebrityId: string,
    movieTitle: string,
    movieId: string,
    
    // ??
    category: CastCategory,
    characters: string
}

export enum CastCategory {
    composer,
    actor,
    actress,
    editor,
    cinematographer
}
