import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

function renderMessage(isDragActive){
  if (!isDragActive) {
    return (<UploadMessage type="inactive">
      Arraste e solte o arquivo do Inquérito aqui, ou clique para selecionar o arquivo
    </UploadMessage>);
  }

  return <UploadMessage type="active"> Solte o arquivo aqui </UploadMessage>
}

function Upload() {
  const history = useHistory();

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
  } = useDropzone({
    onDrop: files => {
      if ( files.length === 0 ) {
        return;
      } else {
        history.push("result")
      } 
    }});

  return (
    <DropContainer {...getRootProps({isDragActive, isDragAccept,
    })}>
      <input {...getInputProps()} />
      {renderMessage(isDragActive)}
    </DropContainer>
  );
}

export default Upload;
