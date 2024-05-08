export default function Page( {params} : {
    params : { slug: string}
}) {
    return <h1>ID: {params.slug}</h1>
}