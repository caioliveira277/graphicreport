import React, { useState } from "react";
import Table from "material-table";

export default function MaterialTable({ data }) {
  const [state, setState] = useState(data);
  var editable = {};

  if (state.editable === true) {
    editable = {
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
    };
  }

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
      title={state.title}
      columns={state.columns}
      data={state.data}
      editable={editable}
    />
  );
}
