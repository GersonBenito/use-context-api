import React from 'react'
import styled from 'styled-components'
import { useForm } from '../../hooks/useForm'

export const FormularioDos = () => {

    const { formulario, handleChange } = useForm({
        pais: '',
        telefono: ''
    })

    //const { pais, telefono  } = formulario;

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        console.log(formulario);
    }

    return (
        <Contenedor>
            <h1>formulario dos</h1>
            <form onSubmit= { handleSubmit } autoComplete='off' >

                <div className="mb-3">
                    <label className='form-label'>Pais</label>
                    <input 
                        className='form-control'
                        name='pais'
                        
                        onChange={ handleChange }
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Telefono</label>
                    <input 
                        type="text" 
                        className='form-control'
                        name='telefono'
                        
                        onChange={ handleChange }
                    />
                </div>

                <div className="mb-3">
                    <button type='submit' className='btn btn-info' >Enviar</button>
                </div>

            </form>
            <p>{JSON.stringify(formulario)}</p>
        </Contenedor>
    )
}

const Contenedor = styled.div`
    padding: 10px;
`;
