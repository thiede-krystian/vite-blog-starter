import axios from 'axios';

import { ApiComment, ApiPost, ApiUser } from './types';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (): Promise<ApiPost[]> => {
  const { data } = await axios.get(`${API_URL}/posts`);
  return data;
};

export const fetchPost = async (postId: number): Promise<ApiPost> => {
  const { data } = await axios.get(`${API_URL}/posts/${postId}`);
  return data;
};

export const fetchComments = async (postId: number): Promise<ApiComment[]> => {
  const { data } = await axios.get(`${API_URL}/posts/${postId}/comments`);
  return data;
};

export const fetchUsers = async (): Promise<ApiUser[]> => {
  const { data } = await axios.get(`${API_URL}/users`);
  return data;
};

export const fetchUserPosts = async (userId: number): Promise<ApiPost[]> => {
  const { data } = await axios.get(`${API_URL}/users/${userId}/posts`);
  return data;
};
