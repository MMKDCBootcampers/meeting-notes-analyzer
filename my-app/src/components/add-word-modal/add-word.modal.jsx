import { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { Form, useValidation } from 'usetheform';

import './add-word-styles.css';

const validations = [
  word => {
    for (const char of word) {
      const charCode = char.charCodeAt();
      return charCode >= 48 && charCode <= 122;
    }
  },
  description => true,
  pronunciation => true,
];

export const AddWordModal = ({ open, handleClose }) => {
  const initialFormState = {
    word: '',
    description: '',
    pronunciation: '',
  };
  const [formState, setFormState] = useState(initialFormState);
  const [status, validation] = useValidation(validations);

  const handleChange = event => {
    console.log('~ event', event.target.id);
    setFormState(formState => ({
      ...formState,
      [event.target.id]: event.target.value,
    }));
  };

  const handleCancel = () => {
    handleClose();
    setFormState(initialFormState);
  };

  // useEffect(() => {
  //   console.log('~ formState', formState);
  // }, [formState]);

  const textFields = [
    {
      id: 'word',
      label: 'Word/Acronym',
      required: true,
    },
    {
      id: 'description',
      label: 'Description',
      required: true,
      helperText: '0/500',
    },
    {
      id: 'pronunciation',
      label: 'Pronunciation',
      required: false,
    },
  ];

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className="modal-box">
        <Typography variant="h4">Add new word</Typography>
        <Form className="add-word-form">
          {textFields.map(({ id, label, required, helperText }) => (
            <TextField
              key={id}
              id={id}
              label={label}
              onChange={handleChange}
              variant="standard"
              InputLabelProps={{ shrink: true }}
              required={required}
              helperText={helperText ? helperText : null}
              fullWidth
            />
          ))}
          <Box className="modal-buttons">
            <Button type="reset" onClick={handleCancel} variant="outlined">
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </Box>
        </Form>
      </Box>
    </Modal>
  );
};
