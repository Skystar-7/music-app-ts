/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com']
    }
};

export default nextConfig;
//You cant load directly images as next js try to reduce it so you have to define it here and src of img