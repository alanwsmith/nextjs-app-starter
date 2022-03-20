import CodeBlock from '../components/CodeBlock'
import HeadTag from '../components/HeadTag'

export default function HomePage() {
  const exampleCode = `
const some_var = 'a value'
const some_object = { key: 'value' }
`

  return (
    <>
      <HeadTag
        description="Another page from TheIdOfAlan"
        image="https://res.cloudinary.com/awsimages/image/upload/w_1200,h_630/c_fit,co_rgb:80bbc8,l_text:Exo%202_66_bold:static-template.alanwsmith.com,w_1080/fl_layer_apply,g_north_west,x_68,y_68/c_fit,co_rgb:80bbc8,l_text:Exo%202_70_bold:alanwsmith.com,w_1000/fl_layer_apply,g_north_west,x_68,y_190/og-images/blank-v4.png"
        title="Another page from TheIdOfAlan"
        type="website"
        url="https://www.alanwsmith.com"
      />
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
