/** @type {import('next').NextConfig} */
const SAAS = 'https://www.assistente-ark.com.br'

const rotasSaaS = ['admin', 'painel', 'login', 'client', 'assistente-ark', 'api']

module.exports = {
  reactStrictMode: true,
  trailingSlash: false,
  async redirects() {
    return rotasSaaS.flatMap((rota) => [
      {
        source: `/${rota}`,
        destination: `${SAAS}/${rota}`,
        permanent: true,
      },
      {
        source: `/${rota}/:path*`,
        destination: `${SAAS}/${rota}/:path*`,
        permanent: true,
      },
    ])
  },
}
