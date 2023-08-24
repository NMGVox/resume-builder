import menuUp from '../assets/menu-up.svg';
import menuDown from '../assets/menu-down.svg';

function ExampleHeaderContainer ({ showContent, visible, header }) {
    console.log(visible);
    return (
        <div className="exampleHeaderContainer">
            <h2 className="exampleHeader">{header}</h2>
            <img onClick={showContent} className="collapse" src={visible ? menuUp : menuDown}></img>
        </div>
    )
}

export { ExampleHeaderContainer }