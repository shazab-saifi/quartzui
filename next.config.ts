import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import remarkSlug from "remark-slug";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', 
        hostname: 'images.pexels.com', 
      },
    ],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [remarkSlug],
    rehypePlugins: [],
  },
})
 
export default withMDX(nextConfig)
