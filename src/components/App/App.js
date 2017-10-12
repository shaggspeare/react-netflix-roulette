import React from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import AppBody from '../AppBody/AppBody';

const App = () => (
    <div className="App">
        <AppHeader/>
        <AppBody/>

        <AppFooter/>
    </div>
);

export default App;