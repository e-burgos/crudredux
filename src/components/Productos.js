import React, { Fragment, useEffect } from 'react';
import Producto from './Producto';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';

const Productos = () => {

    // Creamos la varia de dispatch para poder usar el useDispatch
    const dispatch = useDispatch();

    // Usamos un useEffect para escuchar los cambios que se productan en la DB y listar los productos actualizados
    useEffect(() => {

        // Consultar la API
        const cargarProductos = () => dispatch( obtenerProductosAction() );
        cargarProductos();
        // eslint-disable-next-line
    }, [])

    // Obtener el state (donde se almacenan los productos)
    const productos = useSelector( state => state.productos.productos );
    const error = useSelector( state => state.productos.error );
    const cargando = useSelector( state => state.productos.loading );

    return ( 
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-black text-light">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { productos.length === 0 ? null 
                        : productos.map( producto => (
                            <Producto
                            key={producto.id} 
                            producto={producto}
                            />
                        ))
                    }
                </tbody>
            </table>
            { productos.length === 0 ? <p className="alert alert-light w-100 p2 mt-4 text-center">No hay Productos</p> : null }
            { cargando ? <p className="alert alert-success p2 mt-4 text-center">Cargando...</p> : null }
            { error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error al obtener los productos</p> : null }
        </Fragment>
     );
}
 
export default Productos;