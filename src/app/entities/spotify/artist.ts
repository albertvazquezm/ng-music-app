import { Image } from './image';
export interface Artist {
    id: string;
    genres: string[];
    name: string;
    popularity: number;
    images: Image[];
}