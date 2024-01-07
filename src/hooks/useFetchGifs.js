import { useEffect, useState } from "react";
import { getGifsAPI } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async (category) => {
        const NewImages = await getGifsAPI(category);
        setImages(NewImages);
        setIsLoading(false);
    };

    useEffect(() =>{
        getImages(category);
    }, []);

    return {
        images : images,
        isLoading: isLoading,
    };

}