const isProd = process.env.NODE_ENV === "production";

const site = isProd ? "https://axioma.defucc.me" : "http://localhost:3000";

export const metaData = {
  title: "Axioma",
  description: "Visual geometry study",
  site,
  locale: "en",
  icon: "/logo/gray.svg",
  author: "Axioma.center",
  tags: "geometry, animations, svg, css, platonic solid",
};
