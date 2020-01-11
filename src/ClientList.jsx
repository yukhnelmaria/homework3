import React from "react";
import "./ClientList.css";
import { Client } from "./Client";
import { AddForm } from "./AddForm";

export class ClientList extends React.Component {
  state = {
    clients: [
      {
        id: 1,
        name: "Vasya",
        phone: "+375291122345"
      },
      {
        id: 2,
        name: "Masha",
        phone: "+375443389065"
      },
      {
        id: 3,
        name: "Kolya",
        phone: "+375293300976"
      }
    ],
    nextId: 4
  };

  onClientAdd = (name, phone) => {
    this.setState(currentState => ({
      clients: [
        ...currentState.clients,
        {
          name,
          phone,
          id: currentState.nextId
        }
      ],
      nextId: currentState.nextId + 1
    }));
  };

  onClientRemove = id => {
    const clientIndex = this.state.clients.findIndex(client => client.id === id);

    this.setState((currentState) => ({
      clients: [
        ...currentState.clients.slice(0, clientIndex),
        ...currentState.clients.slice(clientIndex + 1)
      ]
    }));
  };

  render() {
    return (
      <div className="client-list">
        <AddForm onAdd={this.onClientAdd} />

        {this.state.clients.map(client => {
          return (
            <Client
              key={client.id}
              config={client}
              onRemove={this.onClientRemove}
            />
          );
        })}
      </div>
    );
  }
}
