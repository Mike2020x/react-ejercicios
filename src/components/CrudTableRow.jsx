import React from "react";

const CrudTableRow = ({ el }) => {
  return (
    <tr>
      <td>{el.name}</td>
      <td>
        <a target="_blank" rel="noopener" href={el.link}>
          Documentación
        </a>
      </td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
