import Navingbar from "./Navingbar";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';
import ModalMovie from "./ModalMovie";
import axios from "axios";

function FavList() {

    const [favArr, setFavArr] = useState([]);
    const senReq = async () => {
        const serUrl = "https://movies-server-usv7.onrender.com/getMovie";
        const res = await fetch(serUrl);
        const dsts = await res.json()
        setFavArr(dsts);
        console.log(dsts);
    }


    const deleteMovie = async (id) => {
        const url = `https://movies-server-usv7.onrender.com/deleteMovie/${id}`;
        await axios.delete(url);
        senReq();
    }
    useEffect(() => {
        senReq();
    }, [setFavArr])


    return (
        <>
            <Navingbar />
            <Row xs={1} md={3} className="g-4">
                {favArr.map((element) => (
                    <Col key={element.id} style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{element.title}</Card.Title>
                                <Card.Text>
                                    <h6>{element.release_date}</h6>
                                </Card.Text>
                                <Card.Text> {element.overview} </Card.Text>

                                <Card.Text>
                                    <h6>{element.comment}</h6>
                                </Card.Text>
                                {/* <Button variant="outline-primary" onClick={()=>updateComment(element.id)}>Update or Add Comment</Button> */}
                                <hr></hr>
                                <Button variant="outline-danger" onClick={() => deleteMovie(element.id)}>Delete</Button>
                            </Card.Body>
                            <ModalMovie element={element} />
                        </Card>
                    
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default FavList;