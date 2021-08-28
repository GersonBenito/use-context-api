import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext';
import { Card, Image, Empty } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { BotonQuitarProducto } from './BotonQuitarProducto';

export const ListaSeleccionado = () => {
    const { listado } = useContext( DataContext );

    const { Meta } = Card;
    console.log(listado);
    return (
        <Container>
            <h1>productos seleccionado</h1>
            <div className="contenedor">
                {
                    listado.length > 0 ? <>
                        {
                            listado.map(res =>(
                                <Card
                                    key={res.id}
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<Image width={210} alt="example" src={res.image} />}
                                >
                                    <Meta title={res.title} description={res.description} />
                                 <div className="contendorBoton">
                                        <BotonQuitarProducto uid={res.id} />
                                    </div>
                                </Card>
                            ))

                        }
                    </>:<Empty description='Aun no se encuentran productos agregados' />
                }
            </div>
        </Container>
    )
}

const Container = styled.div`
    padding: 10px;

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