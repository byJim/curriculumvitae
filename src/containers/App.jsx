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

    return data.length === 0 ? <h1> Cargando </h1> :(
        <Main>
            <SBar>
                <About
                    avatar={data.avatar}
                    name={data.name}
                    profession={data.profession}
                    bio={data.bio}
                    address={data.address}
                    social ={data.social}
                />
            </SBar>
            <Information>
                <Education data= {data.education} />
                <Experience data = {data.experience} />
                <Certificates data = {data.certificate} />
                <Skill/>
            </Information>
        </Main>
    );
};

export default App;