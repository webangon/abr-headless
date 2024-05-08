import React from "react";

export default async function Frontpage() {
  const query = `
  query {
      pages(where: {name: "home"}) {
          nodes {
            title
            content
          }
      }  
  }    
  `;
  const res = await fetch("https://webangon.com/abr/graphql", {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
  const xyz = res.data.pages.nodes;

  return (
    <>
      {xyz.map((item) => {
        const content = item.content;
        return (
          <>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </>
        );
      })}
    </>
  );
}
