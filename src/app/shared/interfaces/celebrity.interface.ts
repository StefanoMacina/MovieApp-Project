export interface Celebrity {
    id : string,
    name : string,
    birthDate : number,
    death_year?: number
    films :  MovieCelebrity[]
}

export interface MovieCelebrity {
    celebrityName : string,
    celebrityId : string,
    movieTitle : string
    movieId : string,
    category : string,
    characters : string 
}