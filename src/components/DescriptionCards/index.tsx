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
      <img src={cardObj.imgLink} alt={cardObj.title} />
      <h2>{cardObj.title}</h2>
      <p>{cardObj.description}</p>
    </div>
  );
}
