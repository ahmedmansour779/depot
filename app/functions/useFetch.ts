import { useDispatch } from "react-redux";
import { fetchDataFulfilled, fetchDataRejected } from "../store/slice/dataSlice";

export const useFetch = async (api: string) => {
    const dispatch = useDispatch();
    try {
        const res = await fetch(api);
        const data = await res.json();
        dispatch(fetchDataFulfilled(data));
        return data;
    } catch (error) {
        dispatch(fetchDataRejected("Failed to fetch data"));
        throw error;
    }
} 