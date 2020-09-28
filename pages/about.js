import Link from 'next/link'

export default function About(){

    const pageStyle = {
        textAlign: 'center',
        fontFamily: 'Helvetica',
        margin: '200px auto',
        width: '300px',
        fontWeight: 300
    }

    return(
        <div style={pageStyle}>
        <p style={{marginBottom: '50px'}}>Hi I'm <a href="https://teef.dev" target="_blank" rel="noopener noreferrer">teef</a>.</p>
        <p><Link href="/"><a>&#8592; back</a></Link></p>
        </div>
    )
}