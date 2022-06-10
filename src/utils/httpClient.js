const API = "https://api.themoviedb.org/3"

export function get(path){
    return fetch(API + path, {
        headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjJlMGRkODRlNGIxYjZhZjhlMDg0ZmM2YjA2NGU0MyIsInN1YiI6IjYyMzY5M2Y5NTM4NjZlMDAxZWI5MGViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.96pPJGFtGeI6PGFipaiLookqpo5zz-_ovBR-gH5iLGo",
        "Content-Type": "application/json;charset=utf-8",
        },
    }).then( result => result.json())
}