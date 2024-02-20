import React from 'react';
import style from '..//page.module.css';

const Productos = ({ nombre, Marca, Cantidad, Precio, index, deleteTodo }) => {
    return (

    <table className={style.separado}>

        <tr>
          <td>Nombre del producto</td>
          <td>Marca del producto</td>
          <td>Cantidad</td>
          <td>Precio</td>
          <td>Eliminar</td>
        </tr>

        <tr>
          <td>{nombre}</td>
          <td>{Marca}</td>
          <td>{Cantidad}</td>
          <td>{Precio}</td>
          <td><button className={style.btn_delete} onClick={() => deleteTodo(index)}>X</button></td>
        </tr>

    </table>
    );
}

export default Productos;