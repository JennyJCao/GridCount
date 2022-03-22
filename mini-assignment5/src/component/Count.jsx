import './Count.css';
import Cell from './Cell';
import { shallowEqual, useSelector } from 'react-redux';

function Count() {
    const blackCount = useSelector((state) =>  state.cnt, shallowEqual);
    
    return (
        <div>
            <h1>Count: {blackCount}</h1>
            <div id='gridContainer'>
                <Cell index={0}/>
                <Cell index={1}/>
                <Cell index={2}/>
                <Cell index={3}/>                
            </div>
            
        </div>
    );
}


export default Count;