import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import MediaControlCard from './Controlcart';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
   

};

 const BasicModal=({handleClose,open,details})=> {

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                   <MediaControlCard details={details}/>
                </Box>
            </Modal>
        </div>
    );
}


export default BasicModal