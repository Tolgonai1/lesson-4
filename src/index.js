import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Form} from "./App";
import {NameForm} from "./Form";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
      <NameForm/>
  </React.StrictMode>
);


