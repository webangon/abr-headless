import { Metadata } from 'next'
import { Suspense } from "react";
import Footer from '../.././components/Footer'
import Header from '../.././components/Header'

export const metadata: Metadata = {
    title: 'Case Study',
}

export default async function Page({ params }: {
    params: { slug: string };
}) {

    const query = `
    query {
        casestudy(id: "${params.slug}", idType: SLUG) {
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
    const casedata = res.data.casestudy.content;
    return ( 
        <>
            <Header />
            <div dangerouslySetInnerHTML={{__html: casedata}}></div>  
            <Footer/> 
        </>
    )
}