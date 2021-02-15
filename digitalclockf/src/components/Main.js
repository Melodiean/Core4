import React, {Component} from 'react';
import Title from './Title';
import Clock from './Clock';
import '../App.css';
class Main extends Component{
    render(){
        return(  
        <div className='App'>
            <Title title="Digital Clock"></Title>
            <Clock clock="ClockData"></Clock>
        </div>
        )
        
    }
}
export default Main