import { useState } from "react";
import menuUp from '../assets/menu-up.svg';
import menuDown from '../assets/menu-down.svg';

export default function Category ({ categoryName, index, isActive, showContent, children }) {
    
    return (
        <div className="category" >
            <h1 className="category-header">{categoryName} <img onClick={() => showContent(index)} className="collapse" src={isActive ? menuUp : menuDown}></img></h1>
            {children}
        </div>
    );
}