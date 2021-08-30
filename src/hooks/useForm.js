import { useState } from 'react'

export const useForm = ({initialState}) => {

    const [ formulario, setFormulario ] = useState(initialState);

    const handleChange = ({ target }) =>{

        const { name, value } = target;
        
        setFormulario({
            ...formulario,
            [ name ]:value
        })

    }
    return {
        formulario,
        handleChange,
        ...formulario //para desestructurar los datos
    }
}
