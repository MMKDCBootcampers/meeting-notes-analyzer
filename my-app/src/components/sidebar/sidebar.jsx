import * as React from 'react';
import { Link } from "react-router-dom";

import { Button, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import Grid from '@mui/material/Grid';

const Sidebar = () => {
  return (
    <Grid container justifyContent="flex-start" sx={{paddingLeft: '10px'}}>
      <Grid item id="logoTitle" xs={12}>
      <Typography variant="h5"> *LOGO* DECIPHR</Typography>
      </Grid>

      <br />
      <br />
      <br />

      <Grid item id='DashboardLink' xs={12}>
      <Link to="/">
        <Button
          variant='text'
          color="inherit"
          startIcon={<DashboardIcon sx={{ fontSize: 90 }} />}
          sx= {{fontSize: '30px'}}
          >
          Dashboard
          </Button>
      </Link>
      </Grid>

      <br />
      <br />
      <br />

      <Grid item id='MeetingsLink' xs={12}>
        <Link to="/meetings">
        <Button
          variant='text'
          color="inherit"
          startIcon={<GroupsIcon sx={{ fontSize: 90 }} />}
          sx= {{fontSize: '30px'}}
          >
          Meetings
          </Button>
      </Link>
      </Grid>

      <br />
      <br />
      <br />

      <Grid item id='Insights' xs={12}>
        <Link to="/insights">
        <Button
          variant='text'
          color="inherit"
          startIcon={<GroupsIcon sx={{ fontSize: 90 }} />}
          sx= {{fontSize: '30px'}}
          >
          Insights
          </Button>
      </Link>
      </Grid>

      <br />
      <br />
      <br />

      <Grid item id='WordBankLink' xs={12}>
      <Link to="/wordbank">
      <Button
          variant='text'
          color="inherit"
          startIcon={<AccountBalanceIcon sx={{ fontSize: 90 }} />}
          sx= {{fontSize: '30px'}}
          >
          Wordbank
          </Button>
      </Link>
      </Grid>

      </Grid>
  );
};

export default Sidebar;

