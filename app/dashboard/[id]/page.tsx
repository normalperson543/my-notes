export default async function Page({ params }: { params: {id: string } }) {
    const id = params.id;
    return <p>You just looked at note ID: {id}</p>
}