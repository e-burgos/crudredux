import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Actions de Redux
import { editarProductoAction } from '../actions/productoActions';

const EditarProducto = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [ producto, guardarProducto ] = useState({
        nombre: '',
        precio: ''
    })

    // Producto a editar
    const productoeditar = useSelector( state => state.productos.productoeditar );

    // Llenar el state automaticamente
    useEffect(() => {
        guardarProducto(productoeditar);
    }, [productoeditar]);

    // Leer los datos del formulario
    const onChangeFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name] : e.target.value
        })
    }

    // Aplicamos destructuring
    const { nombre, precio } = producto;

    const submitEditarProducto = e => {
        e.preventDefault();

        dispatch( editarProductoAction(producto) );

        // Redireccionar hacia el componente principal 
        history.push('/');
    }

    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar Producto
                        </h2>

                        <form
                        onSubmit={submitEditarProducto}
                        >
                            <div className="from-group mb-4">
                                <label>Nombre Producto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingrese un nombre"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onChangeFormulario} 
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
                                    onChange={onChangeFormulario} 
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >Actualizar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default EditarProducto;