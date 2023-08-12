import { useState } from "react";
import menuUp from '../assets/menu-up.svg';
import menuDown from '../assets/menu-down.svg';

export default function Category ({ categoryName }) {
    const [show, setShow] = useState(false);

    function showContent() {
        setShow(!show);
    }

    return (
        <div className="category" onClick={showContent}>
            <h1 className="category-header">{categoryName} <img className="collapse" src={show ? menuUp : menuDown}></img></h1>
            {show && <div>My PP hurt</div>}
        </div>
    );
}