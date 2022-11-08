import Layout from "../components/Layout";
import { siteConfig } from "../site.config";
import { sampleCards } from "../utils/sample";

export default function Home() {
  return (
    <Layout>
      <div className="pt-12">
        <h1 className="text-5xl mb-8">{siteConfig.title}</h1>
        <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">
          {sampleCards.map((page, index) => (
            <p key={index}>{page.name}</p>
          ))}
        </div>
      </div>
    </Layout>
  );
}
