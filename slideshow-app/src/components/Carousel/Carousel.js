import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import Arrow from './Arrow/Arrow';
import Image from './Image/Image';
import Loader from './Loader/Loader';
import { LEFT, RIGHT } from '../../shared/constants';

function Carousel() {
  const [photoIdx, setPhotoIdx] = useState(0);
  const { photos, loading, error } = useSelector((state) => state);

  useEffect(() => {
    setPhotoIdx(0);
  }, [photos])

  const leftArrow = () => {
    return photoIdx === 0;
  };

  const rightArrow = () => {
    return photoIdx >= photos.length - 1;
  };

  const handleClick = (direction) => {
      let idx = photoIdx;
      let photoLength = photos.length - 1;

      // Decrease Idx & Check for negative boundries
      if (direction === RIGHT && idx < photoLength){
        idx = idx + 1;
      }

      if (direction === LEFT && idx > 0){
        idx = idx - 1;
      }

      // Set New Photo Idx
      setPhotoIdx(idx)
  };

  return (
    <Row>
      <Col className="col-sm-1 d-flex align-items-center justify-content-center">
        <Arrow direction={LEFT} handleClick={handleClick} disabled={leftArrow()} />
      </Col>
      <Col className="col-sm-10 d-flex justify-content-center">
          <Container fluid className="d-flex justify-content-center"> 
            {loading && <Loader/>}
            {!loading && error && <> {error} </>}
            {!loading && photos.length === 0 && <>Please select a type</>}
            {!loading && photos.length > 0 && 
              <Image image={photos[photoIdx]} />
            }
          </Container>
       </Col>
      <Col className="col-sm-1 d-flex align-items-center justify-content-center">
        <Arrow direction={RIGHT} handleClick={handleClick} disabled={rightArrow()} />
      </Col> 
    </Row> 
  )
};

export default Carousel;
