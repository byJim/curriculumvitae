import React, { Component } from 'react';

class HelloWord extends Component{

    state={
        active: true,

    };

    handleClik = () =>{
        this.setState({
            active: !this.state.active,
        });

    };

    render() {
        return(
          <div>
              <button onClick={this.handleClik}> Ocultar </button>
              {
                  this.state.active &&
                      <h1>Hola Mundo</h1>
              }
          </div>
        );
    }
}
export  default  HelloWord;