import * as React from 'react';
import * as ReactDom from 'react-dom';
import AppsPage from './pages/AppsPage';
ReactDom.render(
    <React.StrictMode>
        <AppsPage />
    </React.StrictMode>
    , document.getElementById('root'));