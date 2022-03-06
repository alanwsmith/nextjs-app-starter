import CodeBlock from '../components/CodeBlock'
import { useEffect } from 'react'

export default function HomePage({ setPageDetails }) {
  const exampleCode = `
const some_var = 'a value'
const some_object = { key: 'value' }
`

  // Set the defaults for pageDetails in _app.js and
  // then override them here for each page. Note that
  // `type` should be 'website' for the home page

  useEffect(
    () =>
      setPageDetails({
        description: 'Custom title is here',
        image: 'https://nextjs-starter.alanwsmith.com/og-images/main.png',
        title: 'Custom page title here',
        type: 'article',
        url: 'https://nextjs-starter.alanwsmith.com/',
      }),
    []
  )

  return (
    <>
      <h1>Next.js Starter</h1>
      <ul>
        <li>This is a basic Next.js starter with Tailwind installed. </li>
        <li>
          It contains a basic setup for favicons and Open Graph (OG) images.{' '}
        </li>
        <li>
          The source code for the site is contained in a `site` subdirectory off
          the project root.
        </li>{' '}
        <li>
          A `netlify.toml` file and the `@netlify/plugin-nextjs` module are
          installed for deployment on Netlify.
        </li>
        <li>
          Code syntax highlighting via prism is also included. For example
          <br />
          <CodeBlock code={exampleCode} language="jsx" />
        </li>
      </ul>
      <p>More details are in the README file</p>
    </>
  )
}
