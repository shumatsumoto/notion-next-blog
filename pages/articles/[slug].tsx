import { GetServerSideProps } from "next";
import Image from "next/image";
import React from "react";
import ArticleMeta from "../../components/ArticleMeta";
import Layout from "../../components/Layout";
import { Params } from "../../types/types";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { slug } = ctx.params as Params;
  return {
    props: {
      slug: slug,
    },
  };
};

const Article = ({ slug }) => {
  return (
    <Layout>
      <article className="w-full">
        {/* meta section */}
        <div className="my-12">
          <ArticleMeta />
        </div>

        {/* article */}
        <div className="my-12">article {slug}</div>
      </article>
    </Layout>
  );
};

export default Article;
