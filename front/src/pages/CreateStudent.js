import React, { useState, useRef } from 'react';
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import iconUser from "../images/icone_usuario.png"
import '../style/pages/CreateStudent.css';


function CreateStudents() {
    const [fields, setFields] = useState({
        name: '',
        address: '',
        image: ''
    })
    const [image, setImage] = useState('');
    const imageRef = useRef(null)
    const nameRef = useRef(null)
    const addressRef = useRef(null)

    const handleInputChange = (e) => {
        if (e.target.name === 'image') {
            setImage(e.target.files[0])
            fields[e.target.name] = e.target.files[0]
        } else {
            fields[e.target.name] = e.target.value
        }
        setFields(fields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        Object.keys(fields).forEach(key => formData.append(key, fields[key]))
        console.log(formData)

        await api.post('student', formData, {
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
            }
        }).then(res => {
            setImage('')
            e.target.reset();
        }).catch(error => { });

    }
    return (
        <div>
            <Sidebar />
            <div className='main-div'>
                <h1>Insira os dados e foto do aluno:</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form'>
                        {image ? <label className='form-label label' htmlFor='file'><img src={URL.createObjectURL(image)} alt="Imagem" /></label> : <label className='form-label label' htmlFor='file'><img src={iconUser} alt="Imagem" /></label>}
                        <input ref={imageRef} className='form-control' type="file" id="file" name="image" onChange={handleInputChange} />
                        <br />
                        <input ref={nameRef} className='form-control' type="text" id="name" name="name" placeholder="Digite o nome do Aluno" onChange={handleInputChange} />
                        <br />
                        <input ref={addressRef} className='form-control' type="text" id="address" name="address" placeholder="Digite o endereço" onChange={handleInputChange} />
                        <br />
                        <input type="submit" className='btn btn-primary' placeholder="Enviar" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateStudents;