import React from "react";
import "./Row.css";
import TimeAgo from "timeago-react";

export default function Row({ post }) {
  console.log(post);

  return (
    <li>
      <a href={post.url}>
        <h2>{post.title}</h2>
      </a>
      <div className="info">
        <span> {post.points} pointos</span>
        <span> by {post.author}</span>
        <span>
          <TimeAgo datetime={post.created_at} />
        </span>
        <span> {post.num_comments} comments</span>
      </div>
    </li>
  );
}
