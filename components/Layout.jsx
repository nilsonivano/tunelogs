import Header from './Header';
import Head from 'next/head';


const Layout = (props) => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.min.css"/>
    </Head>
    <Header />
    {props.children}
  </div>
);

export default Layout
