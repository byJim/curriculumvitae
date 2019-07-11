import React from 'react';

const Education = props => (
    <div className="Education">
        <div className="Education-conteiner">

            {props.data.map((edu,index) =>(

                <div className="Education-Item" key={`Edu-${index}`}>

                    <h3>{edu.degree} {edu.institution}
                    <span>{edu.starDate} - {edu.endDate} </span>
                    </h3>
                    <p>{edu.description}</p>

                </div>

              ))}

        </div>
    </div>
);

export default Education;