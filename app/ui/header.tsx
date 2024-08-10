import Link from 'next/link'
export default function Header() {
    return (
        <div className="flex grow p-2 flex-row bg-green-200 dark:bg-green-900 justify-around">
            <div className="flex grow justify-start">
                <Link href="./">
                    <strong>myNotes</strong>
                </Link>
            </div>
            <div className="flex grow justify-end">
                Not logged in
            </div>
        </div>
    )
}