import React from "react";

function FormList({ data, title, buttonClick }) {
  const component = data.map(({ name, number, id }) => {
    return (
      <li key={id}>
        <p>
          {name}: <span>{number}</span>
          <button type="button" onClick={() => { buttonClick(id) }}>Delete</button>
        </p>
      </li>
    );
  });
  return (
    // 
    <div>
      <h2>{title}</h2>
      <ul>
        {component}
    </ul>
    </div>
  )
}

export default FormList;
