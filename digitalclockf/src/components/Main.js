import Title from './Title';
import Clock from './Clock';
import '../App.css';

function Main(){
    return (
       <div className='App'>
           <Title greeting="Hello" title="User" />
           <Clock clock="ClockData" />
       </div>
    )
}

export default Main