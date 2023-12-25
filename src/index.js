import React from 'react';
import ReactDOM from 'react-dom/client';

function Hi() {
  return <p>Hi.</p>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hi />
  </React.StrictMode>
);
