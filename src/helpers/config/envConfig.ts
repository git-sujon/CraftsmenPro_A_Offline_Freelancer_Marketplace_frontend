export const getBaseUrl = ():string => {
    return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1"
}




export const envConfig ={
    useGetUniqueFieldDataWithCountUrl:process.env.GET_UNIQUE_FIELD_DATA_WITH_COUNT_URL as string
}