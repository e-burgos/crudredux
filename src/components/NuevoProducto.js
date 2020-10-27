import React, { useState } from 'react';
// useDispatch se utiliza para mandar a ejecutar las acciones que tengamos y 
// useSelector es la forma en la que se va a acceder al state dentro del componente
import { useDispatch, useSelector } from 'react-redux';

// Actions de Redux
import { crearNuevoProductoAction } from '../actions/productoActions';
import { mostrarAlertaAction, ocultarAlertaAction } from '../actions/alertaActions';

const NuevoProducto = ({history}) => {

    // state del componente
    const [ nombre, guardarNombre ] = useState('');
    const [ precio, guardarPrecio ] = useState(0);

    // utilizar useDispatch para que retorne un funcion
    const dispatch = useDispatch();
    
    // Acceder al state del error
    const cargando = useSelector((state) => state.productos.loading);
    const error = useSelector((state) => state.productos.error);
    const alerta = useSelector((state) => state.alerta.alerta);

    // Dispatch mandara a ejecutar la funciones que se tengan en el action
    // En este caso manda a llamar el action de productoAction 
    const agregarProducto = producto => dispatch( crearNuevoProductoAction(producto) );

    // Cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        // Validar formulario
        if( nombre.trim() === '' || precio <= 0 ) {

            const alerta = {
                msg: 'Ambos compos son obligatorios',
                classes: 'alert alert-danger text-center text-uppercase p3'
            };
            dispatch(mostrarAlertaAction(alerta));

            return;
        }

        // Revisar errores
        dispatch(ocultarAlertaAction());

        // Crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        });

        // redireccionar 
        history.push('/');
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar Nuevo Producto
                        </h2>
                        { alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null }
                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="from-group mb-4">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingrese un nombre"
                                    name="nombre"
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)} 
                                />
                            </div>
                            <div className="from-group mb-4">
                                <label>Precio Producto</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Ingrese su precio"
                                    name="precio"
                                    value={precio}
                                    onChange={e => guardarPrecio(Number(e.target.value))}  
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Agregar</button>
                        </form>
                        { cargando ? <p>'Cargando...'</p> : null }
                        { error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null }
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProducto;