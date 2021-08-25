import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ReadMore({ modal_show, modal_hide }) {
    return (
        <Modal
            show={modal_show}
            onHide={modal_hide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Read More
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.olor, sit amet consectetur adipisicing elit.
                    Id veniam dolores provident
                    praesentium explicabo? Blanditiis ipsam magnam eum maiores temporibus assumenda magni
                    et. Itaque cum, laboriosam officiis debitis alias dolores!
                    ipsum dolor, sit amet consectetur adipisicing elit. Id veniam dolores provident
                    praesentium explicabo? Blanditiis ipsam magnam eum maiores temporibus assumenda magni
                    et. Itaque cum, laboriosam officiis debitis alias dolores!
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={modal_hide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ReadMore;
