import { Metadata } from 'next'
import { Suspense } from "react";
import Loading from "../.././loading";
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
 
export const metadata: Metadata = {
  title: 'Blog - Amazing Business Results',
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
    const pageData = res.data.postBy.content;

    return(
        <>
        <Suspense fallback={<Loading />}>
        <Header/>
        <div dangerouslySetInnerHTML={{__html: pageData}}></div>
        <Footer/>
        </Suspense>
        </>
    ) 
}