import React, { useEffect, useState } from 'react';
import Sidebar from "../components/Sidebar";
import { Link } from 'react-router-dom';
import api from "../services/api";
import Card from '../components/Card';
import '../style/pages/Students.css';

function Students() {
    const [students, setStudents] = useState();
    const [search, setSearch] = useState('');

    useEffect(() => {
        api.get(`student`).then(response => {
            setStudents(response.data);
            
        })
    }, []);
    if (!students) {
        return <p>Carregando...</p>;
    }
    
    const filteredStudents = students.filter(student => student.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <Sidebar />
            <div className='main'>
                <div className="card" id='main-card'>
                    <div className='menu'>
                        <input type="text" placeholder="Busque um aluno" onChange={e => setSearch(e.target.value)} id='search' className="form-control" />
                        <Link to="/register" className='btn btn-primary' id='btn-create'>Adicionar+</Link>
                    </div>
                    <div className='row'>
                        {filteredStudents.map((student) => (
                            <Card
                                key={student.id}
                                id={student.id}
                                name={student.name}
                                address={student.address}
                                uri={`http://localhost:3333/files/${student.image}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Students;