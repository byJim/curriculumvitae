import React from 'react';

const Experiencies = props =>(
    <div className="Experiencies">
        <div className= "Experiencies-conteiner">

            {props.data.map((cer,index) =>(

                <div className="Experience-item" key={`Cer-${index}`}>

                    <h3> {cer.jobTitle} @ {cer.company}
                        <span>{cer.startDate} - {cer.endDate}</span>
                    </h3>
                    <p> {cer.jobDescription}</p>
                </div>

            ))
            }

        </div>
    </div>
);


export default Experiencies;
