
import { Grid, Typography } from '@mui/material';

const Transcript = ({data}) => {

  return (
    <Grid item xs={12}
      id="transcriptsGrid"
      container
      alignItems="flex-start"
      direction="row"
      sx={{borderRadius: '10px', maxHeight: '75vh', overflow: 'auto', padding: '10px', backgroundColor: '#E1E5F2' }}
    >
      {
        data.messages.map((elem, i) => {
          return (
            <Grid item xs={12} key={`message ${i}`}
            sx={{padding: '5px', backgroundColor: '#FFF' }}
            >
            <Grid item xs={12} key={`from ${i}`}>
              {
                elem.from.length > 0 ? <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{elem.from}{':'}</Typography> : <Typography variant="h5" sx={{ fontWeight: 'bold' }}>UNKNOWN{':'}</Typography>
              }
            </Grid>

            <Grid item xs={12} key={`text ${i}`}>
              <Typography variant="h5">{elem.text}</Typography>
            </Grid>
            <br />
            </Grid>
          )
        })
      }
    </Grid>
  );
};

export default Transcript;