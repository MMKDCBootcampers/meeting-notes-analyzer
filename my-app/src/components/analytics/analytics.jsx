
import { Grid, Typography, Divider } from '@mui/material';

const Analytics = ({data}) => {

  return (
    <Grid item xs={12}
    id="analyticsGrid"
    container
    justifyContent="flex-start"
    alignItems="flex-start"
    direction="row"
    sx={{ borderRadius: '10px', minHeight: '25vh', padding: '10px', backgroundColor: '#E1E5F2' }}
    >
      {
        data.members.map((elem, i) => {
          return (
            <Grid container key={`transcript ${i}`}>
              <Grid item xs={12} key={`transcript name ${i}`}>
                <Typography variant="h5">
                  {elem.name}
                </Typography>
                <Typography variant="h5">
                  {' '}
                </Typography>
              </Grid>
              <Grid item xs={6} key={`wpm ${i}`}>
                <Typography variant="body1">
                  WPM
                </Typography>
              </Grid>
              <Grid item xs={6} key={`pace ${i}`}>
                <Typography variant="body1">
                  {elem.pace.wpm}
                </Typography>
              </Grid>
              <Grid item xs={6} key={`talk time ${i}`}>
                <Typography variant="body1">
                  Talk Time %
                </Typography>
              </Grid>
              <Grid item xs={6} key={`talk percentage ${i}`}>
                <Typography variant="body1">
                  {elem.talkTime.percentage}
                </Typography>
              </Grid>
              <Grid item xs={12}>{' '}</Grid>
              <Divider />
            </Grid>
            )
          }
        )
      }
    </Grid>
  );
};

export default Analytics;
