import { Button, Card, Col, Row } from 'react-bootstrap';

function Movie(props) {
    return (
       
            <Col key={props.key } style={{ display:'flex', justifyContent:'space-around',flexDirection: 'column', alignItems:'center' }}>
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={props.movie_image} />
                    <Card.Body>
                        <Card.Title>{props.movie_title}</Card.Title>
                        <Card.Text>
                            <h6>{props.movie_release}</h6>
                        </Card.Text>
                        <Card.Text>{props.movie_overview}</Card.Text>
                        <Button variant="primary">Add to Favorite</Button>
                    </Card.Body>
                </Card>
            </Col>
   


        // <Card className="text-center" >
        //     <Card.Header></Card.Header>
        //     <Card.Body>
        //         <Card.Img variant="top" src={props.movie_image} style={{ width: '18rem' }} />
        //         <Card.Title>{props.movie_title}</Card.Title>
        //         <Card.Text>
        //             {props.movie_overview}
        //         </Card.Text>
        //         <Button variant="primary">Add to Favorite</Button>
        //     </Card.Body>
        //     <Card.Footer className="text-muted">{props.movie_release}</Card.Footer>
        // </Card>
    );
}

export default Movie;
