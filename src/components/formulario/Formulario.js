import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useForm } from '../../hooks/useForm'
import { FormularioDos } from './FormularioDos'

export const Formulario = () => {

    const { formulario, handleChange } = useForm({
        email: '',
        nombre: ''
    });


    const handleSubmit = (evt) =>{
        evt.preventDefault();
        console.log(formulario);
    }

    return (
        <Contenedor>
            <h1>uso de custom hook</h1>
            <form onSubmit= { handleSubmit } >

                <div className="mb-3">
                    <label className='form-label'>Email</label>
                    <input 
                        className='form-control'
                        name='email'
                        onChange={ handleChange }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input 
                        type="text" 
                        className='form-control'
                        name='nombre'
                        onChange={ handleChange }
                    />
                </div>

                <div className="mb-3">
                    <button type='submit' className='btn btn-info' >Enviar</button>
                </div>

            </form>
            <p>{JSON.stringify(formulario)}</p>
            <FormularioDos />
            <hr />
        </Contenedor>
    )
}

const Contenedor = styled.div`
    padding: 10px;
`;
