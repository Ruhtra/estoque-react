import { useQuery } from "react-query"
import { api } from "../../Api"
import { GetAllHistoryResponseDto } from "./HistoryDto"

export function useGetAllHistory() {
    return useQuery<GetAllHistoryResponseDto[]>({
        queryKey: ['AllHistory'],
        queryFn: async () => {
            const response = await api.get<GetAllHistoryResponseDto[]>('/history/all')
            return response.data
        },
        staleTime: 1000 * 60
    })
}
