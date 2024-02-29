import { Button, Card, Col, Row } from 'react-bootstrap';
import ModalMovie from './ModalMovie';
import axios from 'axios';


function Movie(props) {

    const addFav = async (element) => {
        console.log(element);
        const url = "https://movies-server-usv7.onrender.com/addMovie";
        const obj = {
            title: element.title,
            release_date: element.release_date,
            poster_path: element.poster_path,
            overview: element.overview,
            comment: element.comment
        }
        await axios.post(url,obj);
    }




    return (

        <Col key={props.key} style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center' }}>
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={props.movie_image} />
                <Card.Body>
                    <Card.Title>{props.movie_title}</Card.Title>
                    <Card.Text>
                        <h6>{props.movie_release}</h6>
                    </Card.Text>
                    <Card.Text> {props.movie_overview} </Card.Text>
                    <Button variant="outline-primary" onClick={() => addFav(props.element)}>💖</Button>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default Movie;
