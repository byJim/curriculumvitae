import React from 'react';
import Main from '../components/Main';
import Saidbar from '../components/Saidbar';
import Information from '../components/Information';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experiencies';
import Certificates from '../components/Certificates';
import Skill from '../components/Skill';


const App = () => {
    return(
        <Main>
            <Saidbar>
                <About/>
            </Saidbar>
            <Information>
                <Education/>
                <Experience/>
                <Certificates/>
                <Skill/>
            </Information>

        </Main>

    );

}

export default App;