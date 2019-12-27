import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


export default function Form(props) {

  const {
    values,
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched
  } = props;

  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const onSubmitHandler = (e) => {
      e.preventDefault()
      console.log(values)
      alert("submitted");
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <h1>Contact Information!</h1>
        <form  onSubmit={onSubmitHandler}  noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth

            id="uname"
            name="uname"
            label="User Name"
            autoComplete="uname"
            autoFocus

            helperText={touched.uname ? errors.uname : ""}
            error={touched.uname && Boolean(errors.uname)}
            value={values.uname}
            onChange={change.bind(null, "uname")}


          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth            
            id="age"
            name="age"
            label="Age"
            autoComplete="age"
            autoFocus
            helperText={touched.age ? errors.age : ""}
            error={touched.age && Boolean(errors.age)}
            value={values.age}
            onChange={change.bind(null, "age")}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth            
            id="phoneno"
            name="phoneno"
            label="Phone No"
            autoComplete="phoneno"
            autoFocus
            helperText={touched.phoneno ? errors.phoneno : ""}
            error={touched.phoneno && Boolean(errors.phoneno)}
            value={values.phoneno}
            onChange={change.bind(null, "phoneno")}

          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={!isValid}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}