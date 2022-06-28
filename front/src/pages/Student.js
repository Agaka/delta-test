import React, { useState, useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import { useParams, useNavigate } from 'react-router-dom';

import '../style/pages/Student.css';


function Student() {
    const [imagePrev, setImagePrev] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`student/${id}`).then(response => {
            setName(response.data.name);
            setAddress(response.data.address);
            setImagePrev(response.data.image);
        })
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', name);
        formData.append('address', address);
        formData.append('image', image);

        await api.put(`student/${id}`, formData, {
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
            }
        }).then(res => {
            navigate(-1)
        }).catch(error => { });

    }

    const handleDelete = async () => {
        api.delete(`student/${id}`).then(response => {
            navigate(-1)
        })
    }

    return (
        <div>
            <Sidebar />
            <div className='main-div'>
                <h1>Edite os dados e foto do aluno:</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form'>
                        {image ? <label className='form-label label' htmlFor='file'><img src={URL.createObjectURL(image)} alt="Imagem" /></label> : <label className='form-label label' htmlFor='file'><img src={`http://localhost:3333/files/${imagePrev}`} alt="Imagem" /></label>}
                        <input className='form-control' type="file" id="file" name="image" onChange={e => setImage(e.target.files[0])} />
                        <br />
                        <input className='form-control' type="text" id="name" name="name" value={name} placeholder="Digite o nome do Aluno" onChange={e => setName(e.target.value)} />
                        <br />
                        <input className='form-control' type="text" id="address" name="address" value={address} placeholder="Digite o endereço" onChange={e => setAddress(e.target.value)} />
                        <br />
                        <button type='submit' className='btn btn-outline-success'>Atualizar</button>
                    </div>
                </form>
                <br/>
                <button onClick={handleDelete} className='btn btn-outline-danger'>Deletar Aluno</button>
            </div>
        </div>
    );
}

export default Student;