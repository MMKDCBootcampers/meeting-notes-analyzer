import { useState } from 'react';
import {
  Button,
  Container,
  Menu,
  MenuItem,
  Typography,
  TextField,
} from '@mui/material';

import { AddWordModal } from '../add-word-modal/add-word.modal';

export const PageHeader = ({ title, buttonLabel, menuItems }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState();
  const menuOpen = Boolean(menuAnchorEl);
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handleMenuClick = event => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <Container>
      <Typography variant="h3">
        {title}
        <Button
          onClick={title === 'Meetings' ? handleMenuClick : handleModalOpen}
        >
          {buttonLabel}
        </Button>
        <TextField />
      </Typography>
      {menuItems ? (
        <Menu anchorEl={menuAnchorEl} open={menuOpen} onClose={handleMenuClose}>
          {menuItems.map((item, idx) => (
            <MenuItem key={idx} onClick={handleMenuClose}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      ) : null}
      <AddWordModal open={modalOpen} handleClose={handleModalClose} />
    </Container>
  );
};
