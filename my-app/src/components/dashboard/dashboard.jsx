import * as React from 'react';
import { Form } from "usetheform";
import { MaterialuiDropzone } from '../dropzone/dropzone.jsx';

function Dashboard(props) {
  return (
  <Form
    onChange={(state) => console.log("onChange =>", state)}
    onSubmit={(state) => console.log("onSubmit =>", state)}
  >
        <h2>Material UI Dropzone</h2>
        <MaterialuiDropzone />
        <button type="submit">Submit</button>
    </Form>
  )
}


export default Dashboard;
