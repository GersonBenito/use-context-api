import React, { useContext, useState } from 'react';
import { ShoppingCartOutlined }from '@ant-design/icons';
import { Badge, Empty }from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { DataContext } from '../../context/DataContext';
import { ListaSeleccionado } from './ListaSeleccionado';

export const Carito = () => {
    const { listado } = useContext( DataContext );
    const [ show, setShow ] = useState(false);

    const togleShow = () =>{
        setShow(!show);
    }
  
    return (
        <ContenedorCarito>
            <h1>Productos seleccionados</h1>
            <div className="listadoCarito">
                <ShoppingCartOutlined onClick={()=>togleShow()} />
                <Badge count={ listado.length } />
            </div>
            {

                show ? <ListaSeleccionado /> : ''
            }
            <hr />
        </ContenedorCarito>
    )
}

const ContenedorCarito = styled.div`
    .anticon{
        font-size: 70px;
        cursor: pointer;
    }

    .listadoCarito{
        display: flex;
    }

`;