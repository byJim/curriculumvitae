import React from 'react';

const SBar = ({ children }) =>(
    <div className="Sbar">
        <div className="Sbar-contenedor">
            {
                children
            }
        </div>
    </div>
);

export default SBar;