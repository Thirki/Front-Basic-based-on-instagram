import React from "react";
import { FaHeart, FaComment, FaCalendarAlt } from "react-icons/fa";

import { convertToDateFormater } from "../../helpers/convertToDateFormater";
import IPostItem from "../../interfaces/post";

import "./style.scss";

interface IPostCardProps {
  postObject: IPostItem;
}

export function PostCard({ postObject }: IPostCardProps) {
  return (
    <a href={postObject.link} target='_blank="true"'>
      <div className="image-card">
        <div className="image-container">
          <img src={postObject.imagens.resolucaoPadrao.url} alt="" />
          <div className="post-status">
            <p>@{postObject.usuario.username}</p>
            <p>
              <FaHeart />
              {postObject.upvotes}
            </p>
            <p>
              <FaComment />
              {postObject.comentarios}
            </p>
            <p>
              <FaCalendarAlt />
              {convertToDateFormater(postObject.criadoEm)}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
