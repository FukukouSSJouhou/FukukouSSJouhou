import * as React from 'react';
import * as ReactDom from 'react-dom';
import IndexPage from './pages/IndexPage';
ReactDom.render(
    <React.StrictMode>
        <IndexPage />
    </React.StrictMode>
    , document.getElementById('root'));