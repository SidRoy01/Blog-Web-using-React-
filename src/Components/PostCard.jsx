import React from "react";
import appwriteService from "../appwrite/configure";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function PostCard({ $id, title, featuredImage, userId }) {
  const currentUserId = useSelector((state) => state.auth.userData?.$id);

  // Check if the post belongs to the current user
  const isCurrentUserPost = currentUserId && currentUserId === userId;

  return (
    <Link to={`/post/${$id}`}>
      <div
        className={`w-full rounded-xl p-4 ${
          isCurrentUserPost
            ? "bg-blue-300 border border-blue-500"
            : "bg-gray-100"
        }`}
      >
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
