import PropTypes from "prop-types";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl mb-3">{category}</h3>

            {
                isLoading && (<h2>Cargando...</h2>) 
            }

            <div className="card-grid">
                {
                    images.map( (images) => (
                        <GifItem 
                            key={images.id}
                            {...images}
                        
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}