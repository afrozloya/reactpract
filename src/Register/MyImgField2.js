import React, { Component } from "react";
import classes from './MyImgField.css'
import Dropzone from "react-dropzone";
import { ArrowDownward } from "@material-ui/icons";
import {
    List,
    ListItem,
    ListItemText,
    Button,
    LinearProgress,
    Container,
    Typography,
    Snackbar
} from "@material-ui/core";
import styled from "styled-components";

const StyledButton = styled(Button)`
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    border-radius: 3px;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 50px;
    width: 25%;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.myref = null;
    }

    state = {
        files: [],
        students: [],
        upload: false,
        error: false,
        errorMessage: null,
        openToast: true
    };

    scrollToMyRef = () => window.scrollTo(0, this.myRef.offsetTop);

    onDropHandler = files => {
        this.setState({ files: files });
    };

    render() {
        const maxSize = 10048576;

        let studentsDisplay = null;

        let spinner = null;

        if (this.state.upload) {
            spinner = (
                <div>
                    <LinearProgress color="secondary" />
                </div>
            );
        }

        const handleClose = (event, reason) => {
            if (reason === "clickaway") {
                return;
            }

            this.setState({ openToast: false, error: false, errorMessage: null });
        };

        let errorToast = null;

        if (this.state.error) {
            errorToast = (
                <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    open={this.state.openToast}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                </Snackbar>
            );
        }

        return (
            <div style={{ textAlign: "center", paddingTop: "5em" }}>
                <Dropzone
                    onDrop={this.onDropHandler}
                    accept="image/*"
                    minSize={0}
                    maxSize={maxSize}
                    multiple={false}
                >
                    {({
                        getRootProps,
                        getInputProps,
                        isDragActive,
                        isDragReject,
                        rejectedFiles
                    }) => {
                        const isFileTooLarge =
                            rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
                        return (
                            <>
                                <Container>
                                    <div {...getRootProps()} className={classes.uploadBox}>
                                        {/* <img src={uploadImage} alt="i" height="140rem" /> */}
                                        <input {...getInputProps()} />
                                        <ArrowDownward
                                            style={{ color: "white", fontSize: "3rem" }}
                                        />
                                        <div>
                                            {!isDragActive && (
                                                <div>
                                                    <p className={classes.uploadText}>
                                                        Click here or drop a file to upload!
                                                    </p>
                                                </div>
                                            )}
                                            {isDragActive && !isDragReject && (
                                                <div>
                                                    <p style={{color: "lightGreen"}}>
                                                        Drop it like it's hot!
                                                    </p>
                                                </div>
                                            )}
                                            {isDragReject && (
                                                <div
                                                    style={{
                                                        color: "salmon",
                                                        fontWeight: "bold",
                                                        fontSize: "22px"
                                                    }}
                                                >
                                                    File Type not Supported.
                                                </div>
                                            )}
                                            {isFileTooLarge && (
                                                <div style={{ color: "salmon", marginTop: "2em" }}>
                                                    File is too large.
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <List>
                                        {this.state.files.length > 0 &&
                                            this.state.files.map(file => (
                                                <ListItem
                                                    key={file.name + file.size}
                                                    style={{
                                                        backgroundColor: "rgba(138, 110, 138, 0.8)"
                                                    }}
                                                >
                                                    <ListItemText
                                                        style={{ textAlign: "center", color: "white" }}
                                                    >
                                                        {file.name} - {(file.size / 1024 / 1024).toFixed(2)}{" "}
                                                        Mbs
                                                    </ListItemText>
                                                </ListItem>
                                            ))}
                                    </List>
                                    <div style={{ margin: "2rem 0 2rem 0" }}>{spinner}</div>
                                    <div ref={ref => (this.myRef = ref)}>{studentsDisplay}</div>
                                </Container>
                                {errorToast}
                            </>
                        );
                    }}
                </Dropzone>
            </div>
        );
    }
}


export default UploadFile;