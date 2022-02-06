import { useState } from 'react';
import {
  Button,
  Container,
  Menu,
  MenuItem,
  Typography,
  TextField,
} from '@mui/material';

export const PageHeader = ({ title, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Typography variant="h3">
        {title}
        <Button onClick={handleClick}>Upload new</Button>
        <TextField />
      </Typography>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {menuItems.map((item, idx) => (
          <MenuItem key={idx} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
};
