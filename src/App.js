import './App.css';
import {useState, useEffect} from 'react'
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import AboutView from './components/AboutView.js'
import MovieView from './components/MovieView.js'
import {Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';
import SearchView from './components/SearchView';

function App() { /*
--state hooks
--useState declare a "state variable" and initialize it
--fisrt is the variable, scond is the function that update that variable
--whenever the function set changes the variable, the page will be reloded 
*/
    const [searchResults, setSearchResults] = useState([]);
    const [searchText, setSearchText] = useState('');

   /* check if we have text in search box
      if we do, then make a request */
    useEffect(() => {
      if(searchText){
        console.log("Search text: ", searchText)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=97c605df85833cfe0680599df8d1167d&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setSearchResults(data.results)
        })
    }

    }, [searchText])

    return (
        <div>
            <Navbar searchText={searchText} setSearchText={setSearchText}/>
            <Switch>
                <Route path="/" exact>
                    {/* just "/" -> homepage
                      only homepage will have "exact"*/}
                    <Home/>
                </Route>
                <Route path="/about" component={AboutView}/>
                <Route path="/search">
                    <SearchView keyword={searchText} searchResults={searchResults}/>
                </Route>
                <Route path="/movies/:id" component={MovieView}/>

            </Switch>
        </div>
    );
}

export default App;
