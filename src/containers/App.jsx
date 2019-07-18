import React from 'react';
import { createGlobalStyle} from 'styled-components';
import Main from '../components/Main';
import SBar from '../components/SBar';
import Information from '../components/Information';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experiencies';
import Certificates from '../components/Certificates';
import Skill from '../components/Skill';
import useGetData from '../Hooks/useGetDara';

const GlobslStyle = createGlobalStyle`
  body{
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5; 
  }
`;



const App = () => {
    const data = useGetData();
    console.log(data);

    return data.length === 0 ? <h1> Cargando </h1> :(
        <Main>
            <GlobslStyle/>
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
                <Skill data={data.skills}/>
            </Information>
        </Main>
    );
};

export default App;