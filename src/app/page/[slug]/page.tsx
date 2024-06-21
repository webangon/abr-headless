import { Metadata } from 'next'
import Header from '../.././components/Header'
import Footer from "../.././components/Footer"
import axios from 'axios';

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

    //const metadata = await axios.get('https://webangon.com/abr/wp-json/rankmath/v1/getHead?url=https://webangon.com/abr/page/about/')
    //console.log(metadata.data.head);
    //const seo_title = metadata.data.head;
    const pagedata = res.data.pages.nodes;
    //document.getElementsByTagName('head')[0].appendChild(seo_title);
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