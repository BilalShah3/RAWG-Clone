import { useQuery } from "@tanstack/react-query"
import APIClent from "../services/api-client"
import { Game } from "../entities/Game"

const apiClient = new APIClent<Game>("/games")

const useGame = (slug: string) => useQuery<Game, Error>({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug)
})

export default useGame