import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumb = () => {
  const router = useRouter();
  let joinedPath = "";
  return (
    <>
      {router.asPath.split("/").map((path, index) => {
        if (path === "articles" || path === "tags") {
          joinedPath += path + "/";
          return (
            <span className="text-gray-500">
              <span className="text-gray-500 mx-2">/</span> {path}
            </span>
          );
        } else if (path) {
          joinedPath += path + "/";
          return (
            <Link key={index} href={`/${joinedPath}`}>
              <span className="text-gray-800 hover:text-gray-900">
                <span className="text-gray-800 mx-2">/</span> {path}
              </span>
            </Link>
          );
        }
      })}
    </>
  );
};

export default Breadcrumb;
