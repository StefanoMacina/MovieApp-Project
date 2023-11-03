export interface ResponseDto<T = any> {
  movies: T[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
  };
}

export interface Film {
  id: string;
  title: string;
  year: number;
  runningTime: number;
  genres?: string;
  cast?: MovieCelebrity[];
  rating: Rating;
  country?: FilmCountry[];
}

export interface Rating {
  averageRating: number;
  numVotes: number;
}

export interface FilmForm {
  id: string;
  title: string;
  year: number;
  runningTime: number;
  genres?: string;
  averageRating: number;
  numVotes: number;
}

export interface FilmCountry {
  title: string;
  region?: string;
  language?: string;
}

export interface MovieCelebrity {
  celebrityName: string;
  celebrityId: string;
  movieTitle: string;
  movieId: string;
  category: string;
  characters: string;
}

/* export enum CastCategory {
  composer,
  actor,
  actress,
  editor,
  cinematographer,
}
 */