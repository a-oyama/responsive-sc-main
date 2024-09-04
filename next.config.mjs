/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
      images: {
        domains: ['cbtywhpcymifwsazdzlu.supabase.co'],
      },
};

export default nextConfig;
