import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../context/DataContext'
import { Card, Image }from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { BotonAgregar } from './BotonAgregar';

export const Listado = () => {

    const { obtenerProductos, productos } = useContext( DataContext );
    const { Meta } = Card;

    useEffect(() =>{
       obtenerProductos();
    },[])
    return (
        <Container>
            <h1>Lista de productos</h1>
            <div className="contenedor">
                {
                    productos.map(res =>(
                        <Card
                            key={res.id}
                            hoverable
                            style={{ width: 240 }}
                            cover={<Image width={210} alt="example" src={res.image} />}
                        >
                            <Meta title={res.title} description={res.description} />
                        <div className="contendorBoton">
                            <BotonAgregar data={res} />
                        </div>
                        </Card>
                    ))
                }
            </div>
            <hr />
        </Container>
    )
}

const Container = styled.div`
    .contenedor{
        display: grid;
        grid-template-columns: repeat(auto-fit, 18rem);
        justify-content: center;
        justify-items: center;
        grid-gap: 30px 0px ;

    }
    .ant-card-bordered .ant-card-cover{
        display: flex;
        justify-content: center;
        margin-top: 5px;
    }

    .contendorBoton{
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
