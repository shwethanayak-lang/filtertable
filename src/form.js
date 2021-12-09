import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";



const defaultValues = {
  name: "",
  lname:"",
  emailid:""
};


const Form = () => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues.name);
  };
 
  // const handleSubmit = (event) => {
  //   console.log(event.target.value);
  //   document.getElementById("myinput").style.display="block";
  // };
  return (
    
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <TextField
            id="name-input"
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id="lname-input"
            name="lname"
            label="Last Name"
            type="text"
            value={formValues.lname}
            onChange={handleNameChange}
          />
        </Grid>
     
        <Grid item>
          <TextField
            id="email-input"
            name="emailid"
            label="Email Id"
            type="text"
            value={formValues.emailid}
            onChange={handleNameChange}
          />
        </Grid>
         
<br/>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
};
export default Form;