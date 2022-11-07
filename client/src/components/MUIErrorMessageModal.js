import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Alert, AlertTitle} from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '27%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIErrorMessageModal() {
    const { store } = useContext(GlobalStoreContext);

    function handleClose () {
        store.setErrorMessage(null);
    }
    
    
    return (
        <Modal
            open={store.message !== null && store.message !== undefined}
        >
            <Box sx={style}>
            <div id="error-message-modal" className="modal-dialog">
            <header className="dialog-header">
            <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
                This is an error alert — <strong>{store.message}</strong>
            </Alert>
            <input type="button" 
                    id="error-message-close-button" 
                    className="modal-button" 
                    onClick={handleClose} 
                    value='ok' />
            </header>
            </div>
        
            </Box>
        </Modal>
    );
}