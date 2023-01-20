import Layout from "@/Components/Layout";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <h1 className="text-center" onClick={() => {router.push('/users')}} style={{cursor:"pointer"}}>first next js project</h1>
    </Layout>
  )
}
