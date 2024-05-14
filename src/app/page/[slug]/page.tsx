import { Metadata } from 'next'
import { Suspense } from "react";
import Header from '../.././components/Header'
import Loading from "../.././loading";
import Footer from "../.././components/Footer"
 
export const metadata: Metadata = {
  title: 'Amazing Business Results',
}

export default async function Page({ params }: {
    params: { slug: string };
}) {

    const query = `
    query {
        pages(where: {name: "${params.slug}"}) {
            nodes {
              title
              content
            }
        }  
    }    
    `;

    const res = await fetch('https://webangon.com/abr/graphql', {
        method: "POST",
        cache: 'no-store',
        headers: {
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
    ).then(
        data => {
            return data;
        }
    )
    const pagedata = res.data.pages.nodes;
    //console.log(pagedata);
    return(
        <>
        <Header/>
    <Suspense fallback={<Loading />}>
      {pagedata.map((item:any) => {
        const content = item.content;
        return(
            <>
          <h2>{item.title}</h2>
          <div dangerouslySetInnerHTML={{__html: content}}></div>            
            </>
        );
      })}
    </Suspense>
    <Footer/>
        </>
    ) 
}