import Hero from './Hero'
import {Link} from "react-router-dom"


// TMDB key: 97c605df85833cfe0680599df8d1167d

// example link: https://api.themoviedb.org/3/search/movie?api_key=97c605df85833cfe0680599df8d1167d&language=en-US&query=star&page=1&include_adult=false

const MovieCard = ({movie}) => {

    
        const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        const detailUrl=`/movies/${movie.id}`
        return(
            <div className="col-lg-3 col-md-3 col-2 my-4">
                <div className="card">
                    <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                    <div className="card-body">
                        <h5 className="card-title">{movie.original_title}</h5>
                        <Link to= {detailUrl} className="btn btn-primary">Show details</Link>
                    </div>
                </div>
            </div>
    )
}


const SearchView =({keyword, searchResults}) => {
    const title =`You are searching for ${keyword}`

    const resultsHtml =  searchResults.map((obj,i) => {
        return <MovieCard movie={obj} key={i} />
    })
    
    console.log(searchResults, " are the search results")
    return(
        <>
            <Hero text={title} />
            {resultsHtml &&
            <div className="container">
                <div className="row">
                    {resultsHtml}
                </div>
            </div>
            }
        </>
    );
};

export default SearchView