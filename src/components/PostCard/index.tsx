import React, { useState } from "react";
import { FaHeart, FaComment, FaCalendarAlt } from "react-icons/fa";

import { convertToDateFormater } from "../../helpers/convertToDateFormater";
import IPostItem from "../../interfaces/post";

import "./style.scss";

interface IPostCardProps {
  postObject: IPostItem;
}

export function PostCard({ postObject }: IPostCardProps) {
  const [hoverImg, setHoverImg] = useState(false);
  return (
    <a
      href={postObject.link}
      target='_blank="true"'
      onMouseEnter={() => setHoverImg(true)}
      onMouseLeave={() => setHoverImg(false)}
    >
      <div
        className="image-container"
        style={{
          backgroundImage: hoverImg
            ? `linear-gradient(to bottom,rgba(0,0, 0, .5), rgba(0,0, 0, .5)),url(${postObject.imagens.resolucaoPadrao.url})`
            : `linear-gradient(to bottom,rgba(0,0, 0, 0), rgba(0,0, 0, .0)),url(${postObject.imagens.resolucaoPadrao.url})`,
        }}
      >
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
    </a>
  );
}
