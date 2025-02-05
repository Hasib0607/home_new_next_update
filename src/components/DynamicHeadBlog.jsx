"use client";

import Head from "next/head";
import React from "react";

const DynamicHeadBlog = ({ blogPopularData }) => {
  return (
    <Head>
      {blogPopularData?.map(
        (blog, index) =>
          blog?.canonical_url && (
            <link
              key={`canonical-${index}`}
              rel="canonical"
              href={blog.canonical_url}
            />
          )
      )}

      {blogPopularData?.map(
        (blog, index) =>
          blog?.custom_script && (
            <script
              key={`script-${index}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: blog.custom_script }}
            />
          )
      )}
    </Head>
  );
};

export default DynamicHeadBlog;
