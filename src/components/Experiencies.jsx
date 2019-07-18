import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Experiencies = props =>(
    <div className="Experiencies">
        <H2Styled name="Experiences"/>
        <div className= "Experiencies-conteiner">

            {props.data.map((cer,index) =>(

                <div className="Experience-item" key={`Cer-${index}`}>

                    <H3Styled> {cer.jobTitle} @ {cer.company}
                        <span>{cer.startDate} - {cer.endDate}</span>
                    </H3Styled>
                    <PStyled name={cer.jobDescription}/>

                </div>

            ))
            }

        </div>
    </div>
);


export default Experiencies;
