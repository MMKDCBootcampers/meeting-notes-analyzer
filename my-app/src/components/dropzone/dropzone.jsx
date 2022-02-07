import React from "react";
import { useField, useValidation } from "usetheform";
import { DropzoneArea } from "material-ui-dropzone";
import { Grid } from '@mui/material';

const required = (value) => (value ? undefined : "Attachments Required");
export const MaterialuiDropzone = () => {
  const [status, validation] = useValidation([required]);
  const { value, setValue } = useField({
    type: "custom",
    touched: true,
    name: "materialuiDropzone",
    ...validation
  });

  const handleChange = (files) => {
    /* it avoids to call setValue when DropzoneArea
       is initialized with empty values */
    if (!(!value && files.length === 0)) {
      setValue(files);
    }
  };

  return (
    <Grid>
      <DropzoneArea onChange={handleChange} />
      {status.error && <span className="Error">{status.error}</span>}
    </Grid>
  );
};

// import { createStyles, makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => createStyles({
//   previewChip: {
//     minWidth: 160,
//     maxWidth: 210
//   },
// }));

// const classes = useStyles();

// <DropzoneArea
//   showPreviews={true}
//   showPreviewsInDropzone={false}
//   useChipsForPreview
//   previewGridProps={{container: { spacing: 1, direction: 'row' }}}
//   previewChipProps={{classes: { root: classes.previewChip } }}
//   previewText="Selected files"
// />