import Link from 'next/link';
import Head from 'next/head';

export default function firstPost() {
    return (
        <div>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>Here's me post!</h1>
            <h2>
                <Link href="\">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </div>
    )
}