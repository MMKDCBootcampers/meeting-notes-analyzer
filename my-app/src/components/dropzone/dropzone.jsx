import React from "react";
import { useField, useValidation } from "usetheform";
import { DropzoneArea } from "material-ui-dropzone";

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
    <div>
      <DropzoneArea onChange={handleChange} />
      {status.error && <span className="Error">{status.error}</span>}
    </div>
  );
};