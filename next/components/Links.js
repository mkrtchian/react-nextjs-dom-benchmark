import Link from 'next/link'

export default function Links() {
  return (
    <ul>
      <li><Link href="/child1"><a>Go to child 1</a></Link></li>
      <li><Link href="/child2"><a>Go to child 2</a></Link></li>
    </ul>
  );
}
