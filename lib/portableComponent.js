import imageUrlBuilder from "@sanity/image-url";
import client from "./client";

export default function urlFor(source) {
    return imageUrlBuilder(client).image(source);
  }
  
  export const componentsConf = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <figure>
            <img alt={value.alt || " "} loading="lazy"  src={urlFor(value)} />
          </figure>
        );
      },
    },
  };
  