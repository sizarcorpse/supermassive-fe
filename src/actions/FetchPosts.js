import getConfig from "next/config";
import fetch from "isomorphic-unfetch";

export const getAllPosts = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();

  const response = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/posts`);
  const data = await response.json();
  return data;
};
