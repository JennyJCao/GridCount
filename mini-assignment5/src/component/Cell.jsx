import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import './Cell.css';

function Cell(props) {

    // var className = "cell white";
    const {index} = props;
    const dispatch = useDispatch();

    function handleOnClick() {
        dispatch({
            type: 'CHANGE COLOR',
            index: index,
        });
    }

    // change the background color
    const className = useSelector((state) => "cell " + (state.array[index] ? "black" : "white"), shallowEqual);

    return (
        <div className={className} onClick={() => handleOnClick()} >
        </div>
    );
}

export default Cell;