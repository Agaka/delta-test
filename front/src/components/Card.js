import React from 'react';
import { Link } from 'react-router-dom';

import '../style/components/Card.css';

export default function Card(props) {
    return (
        <div className='col-md-4 card-student' >
            <div className="card" >
                <div className="card-head header">
                    <img src={props.uri} className="card-img-top" alt="Avatar" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.address}</p>
                    <Link to={`/student/${props.id}`} className="btn btn-primary">Gerenciar Aluno</Link>
                </div>
            </div>
        </div>
    );
}
