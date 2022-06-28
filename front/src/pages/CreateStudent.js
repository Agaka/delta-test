import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import iconUser from "../images/icone_usuario.png"
import '../style/pages/CreateStudent.css';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';


function CreateStudents() {
    const [fields, setFields] = useState({
        name: '',
        address: '',
        image: ''
    })
    const [image, setImage] = useState('');
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const handleInputChange = (e) => {
        if (e.target.name === 'image') {
            setImage(e.target.files[0])
            fields[e.target.name] = e.target.files[0]
        } else {
            fields[e.target.name] = e.target.value
        }
        setFields(fields)
    }

    const handleSubmitForm = async (e) => {
        const formData = new FormData()
        Object.keys(fields).forEach(key => formData.append(key, fields[key]))
        console.log(formData)

        await api.post('student', formData, {
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
            }
        }).then(res => {
            setImage('')
            reset();
        }).catch(error => { });

    }
    return (
        <div>
            <Sidebar />
            <div className='main-div'>
                <h1>Insira os dados e foto do aluno:</h1>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className='form'>
                        {image ? <label className='form-label label' htmlFor='file'><img src={URL.createObjectURL(image)} alt="Imagem" /></label> : <label className='form-label label' htmlFor='file'><img src={iconUser} alt="Imagem" /></label>}
                        <input {...register('image', { required: 'Insira uma foto para o aluno' })} className='form-control' type="file" id="file" name="image" onChange={handleInputChange} />
                        <ErrorMessage errors={errors} name="image" />
                        <br />
                        <input {...register('name', { required: 'Necessário inserir um nome para o aluno' })} className='form-control' type="text" id="name" name="name" placeholder="Digite o nome do Aluno" onChange={handleInputChange} />
                        <ErrorMessage errors={errors} name="name" />
                        <br />
                        <input {...register('address', { required: 'Endereço necessário' })} className='form-control' type="text" id="address" name="address" placeholder="Digite o endereço" onChange={handleInputChange} />
                        <ErrorMessage errors={errors} name="address" />
                        <br />
                        <input type="submit" className='btn btn-primary' placeholder="Enviar" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateStudents;