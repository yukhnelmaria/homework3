import React from 'react';
import './ClientList.css';
import {Client} from './Client';



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
    ]
  };

  render() {
    return (
      <div className="client-list">
        { this.state.clients.map((client) => {
          return <Client config={client} />
        })}
      </div>
    );
  }
}
