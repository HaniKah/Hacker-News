import React from "react";
import "./Row.css";

export default function Row({ post }) {
  return (
    <li>
      <a href={post.url}>
        <h2>{post.title}</h2>
      </a>
      <div className="info">
        <span> {post.points}</span>
        <span> by {post.author}</span>
        <span> {post.created_at}</span>
        <span> {post.num_comments} comments</span>
      </div>
    </li>
  );
}
