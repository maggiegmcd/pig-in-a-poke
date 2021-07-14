import Link from 'next/link';

export default function firstPost() {
    return (
    <h1>Here's me post!</h1>
    <h2>
        <Link href="\">
            <a>Back to Home</a>
        </Link>
    </h2>
    )
}