import React from "react";

import "./style.scss";

interface IDescriptionCards {
  cardObj: {
    title: string;
    description: string;
    imgLink: string;
  };
}

export function DescriptionCards({ cardObj }: IDescriptionCards) {
  return (
    <div className="description-cards">
      <h2>{cardObj.title}</h2>
      <img src={cardObj.imgLink} alt={cardObj.title} />
      <p>{cardObj.description}</p>
    </div>
  );
}
