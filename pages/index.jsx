import Layout from "../components/Layout";
import fetch from 'isomorphic-fetch';
// import Graph from "../components/Graph";

const Index = (props) => (
  <Layout>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h4>{props.data.name} - {props.data.email}</h4>
          <h4>{props.data.protocol}</h4>
        </div>
      </div>
    </div>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://firebasestorage.googleapis.com/v0/b/firebase-tunelogs.appspot.com/o/datalogs%2Ftest_datalog_32rhi4uhf84h9%2Fdatalog.json?alt=media&token=1fe6dcce-1fc1-4038-b31d-f1188ecdbc6a');
  const data = await res.json();
  return {
    data
  };
}

export default Index
