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
    <div className="image-card">
      {/* <h1>{postObject.usuario.username}</h1> */}
      <div className="image-container">
        <img src={postObject.imagens.thumbnail.url} alt="" />
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
  );
}
