import { TColorSpace } from "@/types/color-space";
import { useState, useEffect } from "react";

interface TErrorResponse {
    message: string;
    error: any;
}

interface IColorListResponse {
    colors: Array<TColorSpace> | undefined;
    isLoading: boolean;
    error: TErrorResponse | undefined;
}

const useColorList = () => {
    const [response, setresponse] = useState<IColorListResponse>(() => ({
        colors: undefined,
        error: undefined,
        isLoading: false,
    }))

    const getColors = () => {
        setresponse(prev => ({
            ...prev,
            isLoading: true
        }));

        fetch('/api/get-random-colors')
            .then(async res => {
                const data = await res.json();
                if (res.ok) return data;
                return Promise.reject(data)
            })
            .then(res => {
                setresponse(prev => ({
                    ...prev,
                    isLoading: false,
                    colors: res
                }));
            })
            .catch(err => {
                setresponse({
                    colors: undefined,
                    error: err,
                    isLoading: false
                })
            })
    }

    useEffect(() => {
        getColors()
    }, [])

    return { ...response, getColors };
}

export default useColorList;