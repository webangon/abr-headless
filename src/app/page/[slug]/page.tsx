import { Metadata } from 'next'
import Header from '../.././components/Header'
import Footer from "../.././components/Footer"
import axios from 'axios';

export async function generateMetadata({ params }: {
    params: { slug: string };
}) {
    const metadata = await axios.get(`${process.env.WP_SITE}/wp-json/wp/v2/uts_seo_data`,
        { params: { type: 'page',slug:params.slug } }
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

    return (
        <>
            {/*Show seo data here {seo_title} */}

            <Header />
            {pagedata.map((item: any) => {
                const content = item.content;
                return (
                    <>
                        <div dangerouslySetInnerHTML={{ __html: content }}></div>
                    </>
                );
            })}
            <Footer />
        </>
    )
}