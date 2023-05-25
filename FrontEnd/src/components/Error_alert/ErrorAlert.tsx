import { Alert } from '@mui/material';
import React from 'react'

const ErrorAlert = () => {
  return (
    <div>
      <Alert style={{width:200,height:50}} severity="error">validation failed !</Alert>
    </div>
  );
}

export default ErrorAlert;
