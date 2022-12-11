import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { siteConfig } from "../site.config";
import { IndexProps } from "../types/types";
import { fetchPages } from "../utils/notion";

export const getServerSideProps: GetServerSideProps = async () => {
  const { results } = await fetchPages({});
  return {
    props: {
      pages: results ? results : [],
    },
  };
};

const Home: NextPage<IndexProps> = ({ pages }) => {
  const displayCount = 6;
  const [card, setCard] = useState(displayCount);
  return (
    <Layout>
      <div className="pt-12">
        <h1 className="text-5xl mb-8">{siteConfig.title}</h1>
        <div className="grid md:gap-x-4 md:gap-y-6 md:grid-cols-3 w-full my-12 mt-10">
          {/* Card */}
          {pages
            .map((page, index) => <Card key={index} page={page} />)
            .slice(0, card)}
        </div>
        {card < pages.length ? (
          <div className="text-center my-8">
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => setCard(card + displayCount)}
            >
              See More
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
};

export default Home;
