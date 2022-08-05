import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getUserImage = async () => {
  const getProfilePicture = gql`
    {
      image {
        image {
          url
        }
      }
    }
  `;

  const { image } = await graphcms.request(getProfilePicture);
  return image;
};
