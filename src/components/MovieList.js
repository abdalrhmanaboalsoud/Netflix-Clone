import Movie from "./Movie";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';



function MovieList() {
    const [moviesArr, setMoviesArr] = useState([]);
    const senReq = async () => {
        const serUrl = "http://localhost:3002/trending";
        const res = await fetch(serUrl);
        const jsonRes = await res.json()
        setMoviesArr(jsonRes);
        console.log("response " +jsonRes)
    }
    useEffect(() => {
        senReq();
    }, [])
    return (
        <>
         <Row xs={1} md={3} className="g-4">
            {moviesArr.map((element) => (
                <div key={element.id} className="movieList">
                    <Movie
                        // movie_id = {element.id}
                        movie_title={element.title}
                        movie_release={element.release_date}
                        movie_overview={element.overview}
                        movie_image={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
                    />
                </div>
                
            ))}
            </Row>
        </>

    )
}

export default MovieList;