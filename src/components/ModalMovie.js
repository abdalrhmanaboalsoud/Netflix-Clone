import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

function ModalMovie(props) {
    const [show, setShow] = useState(false);
    const [comment, setComment] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const updateComment = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        // let imag = `https://image.tmdb.org/t/p/w500/${props.element.poster_path}`;
        const obj = {
            poster_path: `https://image.tmdb.org/t/p/w500/${props.element.poster_path}`,
            title: props.element.title,
            release_date: props.element.release_date,
            overview: props.element.overview,
            comment: event.target.comment.value,
        };
            const url = `https://movies-server-usv7.onrender.com/updateComment/${props.element.id}`;
            await axios.put(url, obj);
            setComment(obj.comment); // Update the comment in the state
            handleClose(); // Close the modal
            setIsLoading(false);
        
    };
    useEffect(() => {
        setComment(props.element.comment);
    }, [props.element.comment]);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Update or Add a Comment
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Title: {props.element.title}</Modal.Title>
                </Modal.Header>
                <img src={`https://image.tmdb.org/t/p/w500/${props.element.poster_path}`} alt={props.element.title} />
                <Modal.Body>{props.element.overview}</Modal.Body>
                <Form onSubmit={updateComment} >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control name="comment" type="text" placeholder="Enter Comment" defaultValue={comment} />
                    </Form.Group>
                    <Button variant="outline-success" type="submit" disabled={isLoading}>
                        {isLoading ? 'Submitting...' : 'Submit'}
                    </Button>
                </Form>
            </Modal>
        </>
    );
}

export default ModalMovie;
