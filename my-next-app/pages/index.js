import Layout from "@/Components/Layout";
import { useRouter } from "next/router";
import Image from "next/image";
import HomePageImage from '/public/HomePage.jpg';

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <h1 className="text-center" onClick={() => { router.push('/users') }} style={{ cursor: "pointer" }}>first next js project</h1>
        <p>please click on the obove text to see employee's list </p>
      </div>

      <div className="centeredItem">
        <Image src={HomePageImage} alt="Home page image" style={{ marginTop: "2%", marginBottom: "2%", borderRadius: "10px" }}></Image>
      </div>
    </Layout>
  )
}
