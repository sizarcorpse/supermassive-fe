import getConfig from "next/config";
// import fetch from "isomorphic-unfetch";

export const getAllPosts = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();

  const response = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/posts`);
  const data = await response.json();

  return data;
};

export const getAllEditorChoices = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();

  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/editor-choices`
  );
  const data = await response.json();
  return data;
};

export const getPostByCategory = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();

  const cat = context.query.category;

  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/categories?categoryName=${cat}`,
    { mode: "cors" }
  );
  const data = await response.json();

  return data[0];
};
