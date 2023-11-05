import { MovieCelebrity } from "./film.interfaces";

export interface Item {
  id: string;
  name: string;
  rating?: number;
  cast?: MovieCelebrity[];
  year?: number;
}