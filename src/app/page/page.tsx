import Link from "next/link";
export default async function Page() {
    const query = `
        query {
            posts {
            edges {
                node {
                title
                slug
                }
            }
            }
        }    
    `;
    const res = await fetch('https://webangon.com/abr/graphql', {
        method: "POST",
        cache: 'no-store',
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            query
        })
    }).then(
        response => {
            return response.json();
        }
    ).then (
        data => {
            return data;
        }
    )
    const pagedata = res.data.posts.edges;

    return (
      <>

      {pagedata.map((item:any) => {
        return(
          <h3 key={item.id}><Link href={`blog/${item.node.slug}`}>{item.node.title}</Link></h3>
        );
      })}
      </>
    );
  }