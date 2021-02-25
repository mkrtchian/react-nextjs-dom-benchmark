import Head from 'next/head'
import IntensiveElement from "../components/IntensiveElement";
import Links from "../components/Links";

export default function Parent() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Links />
      <IntensiveElement />
    </div>
  )
}
