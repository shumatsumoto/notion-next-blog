import type { GetServerSideProps, NextPage } from "next";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { Params, TagProps } from "../../types/types";
import { fetchPages } from "../../utils/notion";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { tag } = ctx.params as Params;
  const { results } = await fetchPages({ tag: tag });
  return {
    props: {
      pages: results ? results : [],
      tag: tag,
    },
  };
};

const Tag: NextPage<TagProps> = ({ pages, tag }) => {
  return (
    <Layout>
      <div className="pt-12">
        <h1 className="text-5xl mb-8">{`#${tag}`}</h1>
        <div className="grid md:gap-x-4 md:gap-y-6 md:grid-cols-3 w-full my-12 mt-10">
          {/* Card */}
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Tag;
