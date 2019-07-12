import React from 'react'

const Skill = props => (
    <div className="Skill">
        <div className="Skill-conteiner">

            {props.data.map((ski, index) =>(

                <div className="Skill-item" key={`Ski-${index}`}>
                    <h3>{ski.name} </h3>
                    <div className="Skill-line">
                        <span> {ski.percentage} </span>
                    </div>
                </div>

            ))
            }

        </div>
    </div>
);

export default Skill;