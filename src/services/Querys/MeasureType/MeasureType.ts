import { useQuery } from "react-query"
import { api } from "../../Api"
import { GetAllMeasureTypeResponseDto } from "./MeasureTypeDto"


export function useGetAllMeasureType() {
    return useQuery<GetAllMeasureTypeResponseDto[]>({
        queryKey: ['MeasureTypeAll'],
        queryFn: async () => {
            const response = await api.get<GetAllMeasureTypeResponseDto[]>('/measureType/all')
            return response.data
        },
        staleTime: 1000 * 60
    })
    
}