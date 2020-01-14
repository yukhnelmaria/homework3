import React from "react";

export const Client = ({ config, onRemove, onEdit}) => {
  return (
    <div className="client">
      <div className="client__id">{config.id}</div>
      <div className="client__name">{config.name}</div>
      <div className="client__phone">{config.phone}</div>
      <div className="client__edit">
        <button onClick={() => onEdit(config.id)}>
          Edit
        </button>
      </div>
      <div className="client__remove">
        <button className="remove" onClick={() => onRemove(config.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};