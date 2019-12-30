import React from 'react'
import Dropzone from 'react-dropzone';

export default function MyImgField(props) {
    return (
        <Dropzone 
        accept="image/*"
        minSize="0"
        maxSize="50000"
        multiple={false}
        onDrop={props.onDrop}
        >
        {({getRootProps, getInputProps}) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
      </Dropzone>            
)
}
