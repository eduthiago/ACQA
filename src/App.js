import React, { useState } from "react"; // importa o React e a função useState para trabalhar com estados
import ListaDeTarefas from "./componentes/ListaDeTarefas"; // importa o componente que exibe a lista de tarefas
//que já importou o componente Tarefa

function App() {
  //o primeiro argumento é o estado atual
  //o segundo argumento é a função para atualizar o estado
  //e o useState inicializa o estado com um array vazio
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [filtro, setFiltro] = useState("TODAS"); // Filtro: TODAS, CONCLUIDAS, PENDENTES

  // função para adicionar uma nova tarefa
  // Verifica se o input não está vazio
  // O Date.now() gera um id unico baseado no tempo
  // começa como não concluída por padrão
  // adiciona a nova tarefa no fim da lista
  // e depois limpa o campo de texto
  function adicionarTarefa() {
    if (novaTarefa !== "") {
      const nova = {
        id: Date.now(),
        texto: novaTarefa,
        concluida: false,
      };
      setTarefas([...tarefas, nova]);
      setNovaTarefa("");
    }
  }

  // função para marcar a tarefa como concluída ou não
  // recebe o id da tarefa como argumento
  // usa o map para criar um novo array de tarefas
  // se a tarefa atual for a que queremos mudar, inverte o valor de concluída
  // se não for, mantém a tarefa como está
  // depois atualiza o estado com o novo array
  function alternarConclusao(id) {
    const novasTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      } else {
        return tarefa;
      }
    });
    setTarefas(novasTarefas);
  }

  // filtra as tarefas com base no filtro escolhido (todas, concluídas ou pendentes)
  // a função filter cria um novo array com as tarefas que atendem à condição
  // se o filtro for "CONCLUIDAS", retorna apenas as tarefas concluídas
  // se o filtro for "PENDENTES", retorna apenas as tarefas pendentes
  // se o filtro for "TODAS", retorna todas as tarefas
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "CONCLUIDAS") return tarefa.concluida;
    if (filtro === "PENDENTES") return !tarefa.concluida;
    return true;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Gerenciador de Tarefas</h2>

      {/* Campo de digitação para adicionar uma nova tarefa */}
      {/* O valor do campo é controlado pelo estado novaTarefa */}
      {/* Quando o usuário digita, o estado é atualizado com o novo valor */}
      {/* O onChange chama a função setNovaTarefa para atualizar o estado */}
      {/* O placeholder aparece quando o campo está vazio para orientar o usuário */}
      {/* O e.target.value pega o valor digitado no campo de texto */}
      <input
        type="text"
        placeholder="Nova tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />

      {/* Botão para adicionar tarefa */}
      <button onClick={adicionarTarefa}>Adicionar</button>

      {/* Botões para filtrar as tarefas */}
      {/* Cada botão chama a função setFiltro com o filtro correspondente */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setFiltro("TODAS")}>Todas</button>
        <button onClick={() => setFiltro("CONCLUIDAS")}>Concluídas</button>
        <button onClick={() => setFiltro("PENDENTES")}>Pendentes</button>
      </div>

      {/* Usa o componente ListaDeTarefas para renderizar os itens filtrados */}
      <ListaDeTarefas
        tarefas={tarefasFiltradas}
        alternarConclusao={alternarConclusao}
      />
    </div>
  );
}

export default App;
