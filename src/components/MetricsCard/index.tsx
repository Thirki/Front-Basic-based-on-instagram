import React from "react";
import { FaComment, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import IPostItem from "../../interfaces/post";

import "./style.scss";

interface IMetricsCard {
  postObject: IPostItem;
}

export function MetricsCard({ postObject }: IMetricsCard) {
  const navigate = useNavigate();
  return (
    <div id="metric-card">
      <img
        src={postObject.imagens.resolucaoPadrao.url}
        alt={`${postObject.usuario} post`}
      />
      <div className="reactions">
        <p>
          <FaHeart />
          {postObject.upvotes}
        </p>
        <p>
          <FaComment />
          {postObject.comentarios}
        </p>
      </div>
      <button
        type="submit"
        onClick={() => {
          navigate(postObject._id);
        }}
      >
        Check metrics
      </button>
    </div>
  );
}
