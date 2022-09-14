import { api } from "./ApiConfig";
import { IfilmesAPI } from "../components/Cards/MovieCard";


const getById = async (title: string): Promise<IfilmesAPI[]> => {
    try {
        const { data } = await api.get(`filmes/${title}`)
        return data;
    } catch(error: any) {
        return [error];
        
    }
}

export const FilmeService = {
    getById
}