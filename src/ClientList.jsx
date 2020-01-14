import React from "react";
import "./ClientList.css";
import { Client } from "./Client";
import { Form } from "./Form";

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
    mode: "view", // 'add', 'edit', 'view'
    clientToEdit: null,

    nextId: 4
  };

  setViewMode = () => {
    this.setState({
      mode: "view",
      clientToEdit: null
    });
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

    this.setViewMode();
  };

  onClientRemove = id => {
    const clientIndex = this.state.clients.findIndex(
      client => client.id === id
    );

    this.setState(currentState => ({
      clients: [
        ...currentState.clients.slice(0, clientIndex),
        ...currentState.clients.slice(clientIndex + 1)
      ]
    }));
  };

  onClientStartEdit = id => {
    this.setState(currentState => ({
      ...currentState,
      clientToEdit: id,
      mode: "edit"
    }));
  };

  onClientEdit = (name, phone) => {
    const clientIndex = this.state.clients.findIndex((client) => client.id === this.state.clientToEdit);
    
    this.setState(currentState => ({
      clients: [
        ...currentState.clients.slice(0, clientIndex),
        {
          name,
          phone,
          id: this.state.clientToEdit
        },
        ...currentState.clients.slice(clientIndex + 1)
      ]
    }));

    this.setViewMode();
  };

  render() {
    const client = this.state.clients.find(
      client => client.id === this.state.clientToEdit
    );

    const mode = this.state.mode;

    return (
      <div className="client-list">
        {mode === "edit" && (
          <div>
            <h3>{`Edit ${client.name}`}</h3>
            <Form
              onSubmit={this.onClientEdit}
              onCancel={this.setViewMode}
              client={client}
            />
          </div>
        )}

        {mode === "add" && (
          <div>
            <h3>Add</h3>
            <Form
              onSubmit={this.onClientAdd}
              onCancel={this.setViewMode}
            />
          </div>
        )}

        {mode === "view" && (
          <div>
            <h3>
              Client List
              <button
                className="primary"
                onClick={() =>
                  this.setState({
                    mode: "add"
                  })
                }
              >
                Add client
              </button>
            </h3>
            {this.state.clients.map(client => {
              return (
                <Client
                  key={client.id}
                  config={client}
                  onRemove={this.onClientRemove}
                  onEdit={this.onClientStartEdit}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
