import React from 'react';
import LoginForm from '../LoginForm';
import showResults from '../showResults';
const App = () => (
    <div>
        <LoginForm onSubmit={showResults}/>
    </div>
);


export default App;