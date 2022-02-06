
import { Grid, Typography } from '@mui/material';

const Attendees = ({data}) => {

  return (
    <Grid item xs={12}
      id="attendeesGrid"
      container
      alignItems="flex-start"
      direction="column"
      sx={{ borderRadius: '10px', minHeight: '25vh', padding: '10px', width: '100%', backgroundColor: '#E1E5F2' }}
    >
      {
        data.members.map((elem, i) => {
          return (
            <Grid item xs={12} key={i}>
              <Typography variant="h5">
                {elem.name}
              </Typography>
            </Grid>
            )
          }
        )
      }
    </Grid>
  );
};

export default Attendees;
