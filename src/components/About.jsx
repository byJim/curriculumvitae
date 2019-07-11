import React from 'react';

const About = ({avatar,name,profession,bio,address,social}) =>(
    <div className="About">
        <div className="About-contenedor">
            <div className="About-avatar">
               <figure>
                   <img src={avatar} alt={name}/>
               </figure>
            </div>

            <div className="About-nombre">
                <h2>{name}</h2>
            </div>

            <div className="Profesion">
                <p> {profession}</p>
            </div>

            <div className="About-descripcion">
                <p>{bio}</p>
            </div>

            <div className="About-localizacion">
                <p> {address} </p>
            </div>

            <div className="About-social">

            </div>
            
        </div>
    </div>
);

export default About;
