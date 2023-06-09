class DataSource {
    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=dde838e092c5ee3774aa159202ca65b4&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results)
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DataSource