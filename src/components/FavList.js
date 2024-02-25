import Navingbar from "./Navingbar";
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from 'react-bootstrap';

function FavList() {

    const [favArr, setFavArr] = useState([]);
    const senReq = async () => {
        const serUrl = "http://localhost:3002/getMovie";
        const res = await fetch(serUrl);
        const dsts = await res.json()
        setFavArr(dsts);
        console.log(dsts);
    }
    useEffect(() => {
        senReq();
    }, [])

    return (
        <>
            <Navingbar />
            <Row xs={1} md={3} className="g-4">
                {favArr.map((element) => (
                    <Col key={element.movie_id} style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{element.movie_title}</Card.Title>
                                <Card.Text>
                                    <h6>{element.comment}</h6>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default FavList;

/*             <Col key={element.movie_id} style={{ display:'flex', justifyContent:'space-around',flexDirection: 'column', alignItems:'center' }}>
                <Card style={{ width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>{element.movie_title}</Card.Title>
                        <Card.Text>
                            <h6>{element.comment}</h6>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
*/