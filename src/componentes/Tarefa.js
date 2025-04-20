import React from "react";

function Tarefa({ tarefa, alternarConclusao }) {
  return (
    <li style={{ margin: "8px 0" }}>
      {/* Caixa de seleção para marcar a tarefa como concluída */}
      <input
        type="checkbox"
        checked={tarefa.concluida} // se estiver concluída, a caixa vem marcada
        onChange={() => alternarConclusao(tarefa.id)} // chama a função para alternar status
      />
      {/* Texto da tarefa, riscado se concluída */}
      <span
        style={{
          marginLeft: "8px",
          textDecoration: tarefa.concluida ? "line-through" : "none",
        }}
      >
        {tarefa.texto}
      </span>
    </li>
  );
}

export default Tarefa;
