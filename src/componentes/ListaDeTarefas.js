import React from "react";
import Tarefa from "./Tarefa"; // importa cada item de tarefa

function ListaDeTarefas({ tarefas, alternarConclusao }) {
  // caso não haja tarefas, exibe mensagem
  if (tarefas.length === 0) {
    return <p>Nenhuma tarefa.</p>;
  }

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          alternarConclusao={alternarConclusao}
        />
      ))}
    </ul>
  );
}

export default ListaDeTarefas;
