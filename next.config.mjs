import createNextIntlPlugin from 'next-intl/plugin';
/** @type {import('next').NextConfig} */
const withIntl = createNextIntlPlugin();
const nextConfig = {};

export default withIntl(nextConfig);
