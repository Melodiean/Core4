import Title from './Title';
import Clock from './Clock';
import '../App.css';

function Main(){
    return (
       <div className='App'>
           <Title title="Digital Clock" />
           <Clock clock="ClockData" />
       </div>
    )
}

export default Main