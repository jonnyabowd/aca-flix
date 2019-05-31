export const loadMyMovieList = () => {
    return function(dispatch) {
        fetch('/movies')
        .then((res) => {
            return res.json();
        })
        .then((movies) => {
            dispatch(myMovieListLoaded(movies));
        });
    };
};

export const myMovieListLoaded = (movies) => {
    return {
        type: "MY_MOVIE_LIST_LOADED",
        value: movies
    };
};

export const loadSearch = (searchTerm) => {
    return function(dispatch) {
        fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=a0c84187adf6269034801f53186ce316`)
        .then((res) => {
            return res.json();
        })
        .then((movies) => {
            dispatch(searchLoaded(movies));
        });
    };
};

export const searchLoaded = (movies) => {
    return {
        type: "SEARCH_RESULTS_LOADED",
        value: movies.results
    };
};

export const saveMyMovie = (movie) => {
    return function(dispatch) {
        fetch('/movies', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(movie)
          })
          .then(res => res.json())
          .then(movie => dispatch(loadMyMovieList())
        );
    };
};

export const removeMyMovie = (id) => {
    return function(dispatch) {
        fetch(`/movies/${id}`, {
            method: 'delete'
        })
        .then((res) => {
            return res.json();
        })
        .then((movies) => {
            dispatch(loadMyMovieList());
        });
    };
};