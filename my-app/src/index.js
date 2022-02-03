import './index.css';
import Insights from './pages/insights/insights.page.jsx';
import Meetings from './pages/meetings/meetings.page.jsx';
import Wordbank from './pages/wordbank/wordbank.page.jsx';
import App from './App';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


const drawerWidth = 240;
// const drawerWidth = 335;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              LOGO Deciphr
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <List>
            {['Dashboard', 'Meetings', 'Wordbank'].map((text, index) => (
              text === "Dashboard" ?
                <Link to="/">
                  <ListItem button key={text}>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
                </Link> : (text === "Meetings" ?
                <Link to="/meetings">
                <ListItem button key={text}>
                <ListItemIcon>
                  <GroupsIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
              </Link> :
                <Link to="/wordbank">
                  <ListItem button key={text}>
                  <ListItemIcon>
                    <AccountBalanceIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
                </Link>
                )))}
            </List>
            <Divider />
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="meetings" element={<Meetings />} />
            <Route path="wordbank" element={<Wordbank />} />
            <Route path="insights" element={<Insights />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);