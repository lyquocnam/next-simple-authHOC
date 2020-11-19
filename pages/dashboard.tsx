import Link from 'next/link'
import Layout from '../components/Layout'
import withAuthorized from "../libs/with-authorized";

const DashboardPage = () => (
  <Layout title="Dashboard | Next.js + TypeScript Example">
    <h1>Dashboard</h1>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default withAuthorized(DashboardPage);
