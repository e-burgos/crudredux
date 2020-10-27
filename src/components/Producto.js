import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditarAction } from '../actions/productoActions';

const Producto = ({producto}) => {

    // Aplicamos destructuring
    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();

    // Habilitar History para redireccion 
    const history = useHistory();

    const confirmarEliminarProducto = id => {

        // Preguntar si confirma la eliminacion
        const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
        title: '¿Estas Seguro?',
        text: "Luego de eliminar este producto no podrás revertir esta acción",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminarlo',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
        }).then((result) => {
        if (result.isConfirmed) {
            // Pasar la confirmacion al action 
            dispatch( borrarProductoAction(id) );
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
            'Cancelado',
            'Tu producto esta a salvo',
            'error'
            )
        }
        }) 
    }

    // Función que redirege de forma programada
    const redireccionarEdicion = (producto) => {
        dispatch( obtenerProductoEditarAction(producto) );
        history.push(`/productos/editar/${producto.id}`);
    }

    return ( 
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">$ {precio}</span></td>
            <td className="acciones">
                <button  
                    type="button"
                    className="btn btn-primary mr-2"
                    onClick={() => redireccionarEdicion(producto)}
                >Editar</button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
     );
}
 
export default Producto;