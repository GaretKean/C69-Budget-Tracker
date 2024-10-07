import React from "react";
import { Link } from 'react-router-dom';

export default function BudgetPanel(props) {

// COPY AND PASTE CODE BENEATH WHERE NEEDED   
//------>       <InformationPanel category={"n/a"} description={"n/a"} amount={"n/a"} lastUpdated={"n/a"} name={"n/a"} />

    return (

        <div className="card w-75 mx-auto m-3 rounded-4 shadow-sm border-light-subtle">
            <div className="card-body ps-4 pb-1 pe-4 pt-4">
                <p className="card-title d-flex text-body-tertiary fw-medium">{props.title}</p>
                <h1 className="d-flex text-muted pb-3">{props.total}</h1>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="fw-medium fw-light fst-italic" style={{ fontSize: '0.75rem' }}>
                        last updated - {props.lastUpdated}
                    </p>
                    <div className="invisible">{props.name}</div>
                        {props.edit && (
                            <Link to={`/${props.name.toLowerCase()}`} className="editUpdate text-black fw-medium me-2">
                                {props.edit}
                            </Link>
                        )}
                </div>
            </div>
        </div>
    );
}

