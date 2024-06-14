import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "rn3c3htaXDfuZ1yWUYUF3U",
      token: "3b0cUYg8iftCuy36GNGkLfvXR8xcb31RUV65Uy8AEw8U1MnkjrEZ93qpXw7D8pq2GsFwHxKnaNcwWgGQ",
    },
  ],
  host: "https://builder.yurekai.com",
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
