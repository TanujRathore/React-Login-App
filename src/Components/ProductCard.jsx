import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import {ButtonGroup} from 'react-bootstrap';

function ProductCard ({product, handleCardClick}){
  const [isImageLoaded, setImageLoaded] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleAddClick = (e) => {
    e.stopPropagation(); // prevent triggering the modal
    setQuantity(1);
  };

  const increaseQty = (e) => {
    e.stopPropagation();
    setQuantity(prev => prev + 1);
  };

  const decreaseQty = (e) => {
    e.stopPropagation();
    setQuantity(prev => prev - 1);
  };

  return(
    <div className='card-item' onClick={()=> handleCardClick(product)}>
      <Card style={{ width: '18rem'}} className="h-100">
        <div className="image-container">
          {!isImageLoaded && (
            <div className="image-loader">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
          <Card.Img
            variant="top"
            src={product.thumbnail}
            onLoad={() => setImageLoaded(true)}
            style={{
              display: isImageLoaded ? 'block' : 'none',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          {quantity === 0 ? (
            <Button variant="primary" className="mt-auto" onClick={handleAddClick}>
              Add
            </Button>
          ) : (
            <ButtonGroup className="mt-auto">
              <Button  onClick={decreaseQty}>-</Button>
              <Button  onClick={(e) => e.stopPropagation()}  disabled>{quantity}</Button>
              <Button  onClick={increaseQty}>+</Button>
            </ButtonGroup>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;