import React from 'react';
import Main from '../components/Main';
import SBar from '../components/SBar';
import Information from '../components/Information';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experiencies';
import Certificates from '../components/Certificates';
import Skill from '../components/Skill';
import useGetData from '../Hooks/useGetDara';


const App = () => {
    const data = useGetData();
    console.log(data);

    return(
        <Main>
            <SBar>
                <About/>
            </SBar>
            <Information>
                <Education/>
                <Experience/>
                <Certificates/>
                <Skill/>
            </Information>
        </Main>
    );
};

export default App;