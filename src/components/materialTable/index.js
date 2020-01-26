import React, { useState } from "react";
import Table from "material-table";

export default function MaterialTable() {
  const [state, setState] = useState({
    columns: [
      { title: "Nome", field: "name" },
      { title: "Descrição", field: "description" },
      { title: "Finalizar em", field: "finishIn", type: "date" },
      {
        title: "Prioridade",
        field: "priority",
        lookup: { 34: "Simples", 63: "Urgente" }
      }
    ],
    data: [
      {
        name: "Projeto 1",
        description: "loren loren loren y",
        finishIn: "01/12/2019",
        priority: 63
      }
    ]
  });

  return (
    <Table
      localization={{
        pagination: {
          labelDisplayedRows: "{de}-{para} do {count}",
          labelRowsPerPage: "Linhas por pagina",
          labelRowsSelect: "Linhas",
          firstTooltip: "Primeira pagina",
          lastTooltip: "Ultima pagina",
          nextTooltip: "Proxima pagina",
          previousTooltip: "Pagina anterior"
        },
        toolbar: {
          nRowsSelected: "{0} linhas selecionadas",
          searchPlaceholder: "Buscar"
        },
        header: {
          actions: "Ações"
        },
        body: {
          emptyDataSourceMessage: "Nenhum item no momento",
          filterRow: {
            filterTooltip: "Filtro"
          },
          editRow: {
            deleteText: "Tem certeza que deseja deletar?",
            saveTooltip: "Salvar",
            cancelTooltip: "Cancelar"
          },
          deleteTooltip: "Deletar",
          addTooltip: "Adicionar",
          editTooltip: "Editar"
        }
      }}
      title="Tarefas"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
