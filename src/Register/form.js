import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Select, MenuItem } from '@material-ui/core';
import MyImgField from './MyImgField';
// import MyImgField from './MyImgField3';



export default function Form(props) {

  const [upImg, setupImg] = useState(undefined)

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

  let mybg3 = {
    backgroundColor: 'white',
    opacity: '0.8',
    borderRadius: '20px',
    textAlign: 'center',
    padding: '20px',
    marginTop: '30px',
  }

  const onDropHandler = (files) => {
    setupImg(files)
    console.log(files)
  }

  return (
    <Container style={mybg3} component="main" maxWidth="sm">
      <div>
        <h1>Contact Information!</h1>
        <form encType="multipart/form-data"  onSubmit={onSubmitHandler}  noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth

            id="uname"
            name="uname"
            label="User Name"

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

            id="email"
            name="email"
            label="Email"

            helperText={touched.email ? errors.email : ""}
            error={touched.email && Boolean(errors.email)}
            value={values.email}
            onChange={change.bind(null, "email")}

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

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth 
            type="password"

            id="password"
            name="password"
            label="password"

            helperText={touched.password ? errors.password : ""}
            error={touched.password && Boolean(errors.password)}
            value={values.password}
            onChange={change.bind(null, "password")}

          />

<TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth 
            type="password"

            id="cpassword"
            name="cpassword"
            label="confirm password"

            helperText={touched.cpassword ? errors.cpassword : ""}
            error={touched.cpassword && Boolean(errors.cpassword)}
            value={values.cpassword}
            onChange={change.bind(null, "cpassword")}

          />



          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth            
            type="number"
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
            multiline
            rows="5"
            id="address"
            name="address"
            label="address"
            autoComplete="address"
            autoFocus
            helperText={touched.address ? errors.address : ""}
            error={touched.address && Boolean(errors.address)}
            value={values.address}
            onChange={change.bind(null, "address")}

          />

      <TextField
            style={{marginTop: "20px", marginBottom: "20px"}}
            variant="outlined"
            // margin="normal"
            required
            fullWidth 
            select

            id="gender"
            name="gender"
            label="Gender"

            // helperText={touched.gender ? errors.gender : ""}
            error={touched.gender && Boolean(errors.gender)}
            value={values.gender}
            onChange={change.bind(null, "gender")}
          >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          </TextField> 

          {/* <MyImgField onDrop={onDropHandler}/> */}

          {/* <TextField
            defaultValue=""
            variant="outlined"
            margin="normal"
            required
            fullWidth            
            type="file"
            id="upload_img1"
            name="upload_img1"
            onChange={(event) => {
              setFieldValue("file", event.currentTarget.files[0]);
            }}
            // label="Please Upload Image"
            helperText={touched.upload_img1 ? errors.upload_img1 : ""}
            error={touched.upload_img1 && Boolean(errors.upload_img1)}
            value={values.upload_img1}
            // onChange={change.bind(null, "upload_img1")}

          /> */}



          <Button
            type="submit"
            fullWidth
            margin="normal"
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