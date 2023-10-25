export interface Celebrities {
    id : string,
    name : string,
    birthDate : number,
    death_year?: number
    films :  CelebritiesFilms[]
}

export interface CelebritiesFilms {
    celebrityName : string,
    celebrityId : string,
    movieTitle : string
    movieId : string,
    category : string,
    characters : string 
}