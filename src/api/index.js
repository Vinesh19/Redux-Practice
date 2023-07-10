import { API_URL } from "../config";

export const getPostsApi = async () => {
  const response = await fetch(`${API_URL}/posts`, {
    method: "GET",
  });
  return response.json();
};

// Create a post
export const createPostApi = async (post) => {
  const response = await fetch(`${API_URL}/posts/add`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json",
    },
  });
  return response.json();
};

// Get a single post
export const getSinglePostApi = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "GET",
  });
  return await response.json();
};

// Update a post
export const updatePostApi = async (id, post) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json",
    },
  });
  return await response.json();
};

// Delete a post
export const deletePostApi = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};
