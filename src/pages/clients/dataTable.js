import React, { useState } from "react";
import { Link } from "@material-ui/core";

const users = {
  1: {
    name: "Joseph Stranger"
  }
}

const DataTable = data => {
  const [user, setUser] = useState({});

  const handleClickRow = e => {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    setUser(users[id]);
  };

  return {
    user: user,
    columns: [
      {
        title: "Avatar",
        field: "imageUrl",
        render: rowData => (
          <img
            src={rowData.imageUrl}
            alt=""
            style={{ width: 40, height: 40, borderRadius: "50%" }}
          />
        )
      },
      {
        title: "Cliente",
        field: "client",
        render: rowData => (
          <Link href="/app" onClick={handleClickRow} data-id={1}>
            {rowData.client}
          </Link>
        )
      },  
      {
        title: "Status",
        field: "status",
        lookup: { inactive: "Inativo", active: "Ativo", waiting: "Aguardando" }
      }
    ],
    data: [
      {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBMxyAg9hl69ZUyDaSbnCW2ET7pc_6q_AsC5VD0XaWJxoHW6Z-IA&s",
        client: "Will Smith",
        status: "active"
      },
      {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFljs6YFrJbR5d_DVR-7-k9jgmam6y0RpizVKQDTl3LsUGhJPYA&s",
        client: "Joseph Stranger",
        status: "waiting"
      }
    ],
    title: "Clientes",
    editable: { active: true, Add: false }
  };
};

export default DataTable;
