import React from "react";

export const Client = ({ config, onRemove }) => {
  return (
    <div className="client">
      <div className="client__id">{config.id}</div>
      <div className="client__name">{config.name}</div>
      <div className="client__phone">{config.phone}</div>
      <div className="client__remove">
        <button onClick={() => onRemove(config.id)}>Remove</button>
      </div>
    </div>
  );
};
