import Hero from './Hero';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';


const MovieView =() => {
    const {id} = useParams()
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] =  useState(true)

    /* when id changes in url, the request will be make*/
    useEffect(() => {
        console.log("Make an api request", id)
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=97c605df85833cfe0680599df8d1167d&language=en-US`)
            .then(response => response.json())
            .then(data =>{
                setMovieDetails(data)
                setIsLoading(false)
            })
    }, [id])

    function renderMovieDetails(){
        if(isLoading){
            return <Hero text="Loading..."/>
           
         
        }
        if(movieDetails) {
            //TODO: universal picture for movie that does not have one
            const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
            const posterPath = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}` 
            return(
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath} alt={movieDetails.original_title} className="img-fluid-shadow"/>
                            </div>
                            <div className="col-md-6 ms-auto">
                                <h2> {movieDetails.original_title}</h2>
                                <p className="lead">
                                    {movieDetails.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    }

    return renderMovieDetails()
};

export default MovieView