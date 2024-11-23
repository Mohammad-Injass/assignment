// import { Fragment } from "react";
import { MouseEvent } from "react";
import { useState } from "react";

const handleClick = (event: MouseEvent) => console.log(event);


interface Props {
    names: string[];
    heading: string;
    onSelectName: (name: string) => void;
}

function ListGroup({ names, heading, onSelectName }: Props) {
    // let names = ["mohammad",'mohmmad', "ahmad","injass"];
    const [selectedIndex, setselectedIndex] = useState(-1);
    // names = [];
    return (
        // <Fragment>
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {/* <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li> */}


                {/* {names.length ===0 ? <p>No name fond</p> : null} */}

                {names.length === 0 && <p>No name fond</p>}
                {names.map((names, index) => (
                    <li
                        className={selectedIndex === index
                            ? "list-group-item active"
                            : "list-group-item "}
                        key={names}
                        onClick={() => {
                            setselectedIndex(index);
                            onSelectName(names);
                        }
                        }
                    >
                        {names}
                    </li>
                ))}
            </ul>
        </>
        // </Fragment>
    );
}
export default ListGroup;