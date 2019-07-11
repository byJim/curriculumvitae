import React from 'react';

const Certificates = props =>(
    <div className="Certificates">
        <div clasName="Certificates-conteiner">

            {props.data.map((cer,index) =>(

                <div className="Certificates-Items" key={`Cer-${index}`}>

                    <h3> {cer.name} @ {cer.institution}
                    <span>{cer.date}</span>
                    </h3>

                    <p> {cer.description}</p>

                </div>

            ))}


        </div>
    </div>
);

export default Certificates;