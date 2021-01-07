import getConfig from "next/config";
import fetch from "isomorphic-unfetch";

export const giveReaction = async ({ postId, reaction }) => {
  const { publicRuntimeConfig } = getConfig();

  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/posts/${postId}/${reaction}`,
    {
      method: "PATCH",
    }
  );

  return response;
};
