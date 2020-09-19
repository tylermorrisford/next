import Link from 'next/link'
export default function About(){
    return(
        <>
        <p style={{textAlign: 'center', margin: '100px auto'}}>Hi I'm teef</p>
        <p style={{textAlign: 'center', margin: '100px auto'}}><Link href="/"><a>&#8592; back</a></Link></p>
        </>
    )
}