import { Metadata } from 'next'
import { Suspense } from "react";
import Loading from "../.././loading";
 
export const metadata: Metadata = {
  title: 'About',
}

export default async function Page({ params }: {
    params: { slug: string };
}) {

    const query = `
    query {
        postBy(slug: "${params.slug}") {
            title
            content
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
    const xyz = res.data.postBy.content;

    return(
        <>
        <Suspense fallback={<Loading />}>
        <h1>{res.data.postBy.title}</h1>
        <div dangerouslySetInnerHTML={{__html: xyz}}></div>
        </Suspense>
        </>
    ) 
}