import { Metadata } from 'next'
import { Suspense } from "react";
import Footer from '../.././components/Footer'
import Header from '../.././components/Header'
import axios from 'axios';

export async function generateMetadata({ params }: {
    params: { slug: string };
}) {
    const metadata = await axios.get(`${process.env.WP_SITE}/wp-json/wp/v2/uts_seo_data`,
        { params: { type: 'casestudy',slug:params.slug } }
    )
    
    return {
        title: metadata.data.title,
        description:metadata.data.description,
        keywords:metadata.data.focus,
        robots: {
            index: metadata.data.robot_index,
            follow: metadata.data.robot_follow,
        },        
    }
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