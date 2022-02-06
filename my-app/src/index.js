import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grid from '@mui/material/Grid';
//import './index.css';
import Insights from './pages/insights/insights.page.jsx';
import Dashboard from './pages/dashboard/dashboard.jsx';
import Meetings from './pages/meetings/meetings.page.jsx';
import Wordbank from './pages/wordbank/wordbank.page.jsx';
import Sidebar from './components/sidebar/sidebar.jsx';
import AuthProvider from './contexts/AuthContext.jsx';

ReactDOM.render(
    <AuthProvider>
      <BrowserRouter>
          <Grid container>
            <Grid item xs={2}
              id="sidebarGrid"
              sx={{
                height: '99vh',
                borderRadius: '10px',
                backgroundColor: '#137A8B',
            }}>
              <Sidebar />
            </Grid>

            <Grid item xs={10}
              id="mainContentGrid"
              container
              justifyContent="center"
              direction="row"
              sx= {{ height: '99vh'}}
              >
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="meetings" element={<Meetings />} />
                  <Route path="wordbank" element={<Wordbank />} />
                  <Route path="insights" element={<Insights />} />
                </Routes>
            </Grid>
          </Grid>
      </BrowserRouter>
    </AuthProvider>,
  document.getElementById('root')
);
