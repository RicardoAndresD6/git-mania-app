export const GifItem = ({title, url, id}) => {

    return (
        <div className="card">
            <img src={url} alt={title} className="img-gif" />
            <p className="mb-2 bg-transparent block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{title}</p>
        </div>
    )
}

