import React  from 'react';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MovieImage from './MovieImage';


const ModalComponent = ({
  modalState,
  setModalState,
  modalSelectedMovie={},
  
  }) => {
    const toggle = () => setModalState(!modalState);
    
    return (
        <div>
        <Modal 
        isOpen={modalState} 
        toggle={toggle} 
        >
          <ModalHeader toggle={toggle}>{modalSelectedMovie.title ? modalSelectedMovie.title : modalSelectedMovie.name }</ModalHeader>
          <ModalBody>
            <MovieImage 
            movieImageUrl={modalSelectedMovie.backdrop_path }

            width={'100%'}
            />
            {modalSelectedMovie.overview}
            <div>
              <hr/>
              <p>Language: {modalSelectedMovie.original_language}</p>
              <h5>Ranking</h5>
              <p>Puntuación :{modalSelectedMovie.vote_average}</p>
              <p>Total Votos: {modalSelectedMovie.vote_count}</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    )
};

export default ModalComponent;