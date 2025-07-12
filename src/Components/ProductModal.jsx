import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ProductModal({show ,onHide, product}){
    if (!product) return null;

    return(
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <video controls width="100%" className="mt-3">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
             Your browser does not support the video tag.
            </video>
            {product.description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
    );
}

export default ProductModal;