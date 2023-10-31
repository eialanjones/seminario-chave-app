import React from "react";
import { builder } from "@builder.io/sdk";
import Head from "next/head";
import { RenderBuilderContent } from "@/components/builder";

// Replace with your Public API Key
builder.init(process.env.BUILDER_API!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Home(props: PageProps) {
  const homepageContent = await builder
    .get('page', {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/homepage",
      },
      prerender: false,
    })
    .toPromise();

  return (
    <>
      <Head>
        <title>{homepageContent?.data.title}</title>
      </Head>
      {/* Render the Builder page */}
      <RenderBuilderContent
        model="homepage"
        content={homepageContent} />
    </>
  );
}
