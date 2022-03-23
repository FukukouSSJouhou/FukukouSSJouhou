import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppsPage from './pages/AppsPage';
import IndexPage from './pages/IndexPage';
import Page404 from './pages/Page404';
import PlamarPage from './pages/PlamarPage';
class App extends React.Component{
    public render():React.ReactNode{
        return(
            <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IndexPage />}/>
                    <Route path="/index.html" element={<IndexPage />}/>
                    <Route path="/plamar.html" element={<PlamarPage />}/>
                    <Route path="/apps.html" element={<AppsPage />}/>
                    <Route path="/404.html" element={<Page404 />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
            </>
        );
    }
}
export default App;