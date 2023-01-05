/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images:{
    domains:[
      "links.papareact.com",
      "upload.wikimedia.org",
      "a0.muscache.com"
    ],
  },
  env: {
    mapbox_key: "pk.eyJ1IjoiYXBwbGV1Y3NkIiwiYSI6ImNsY2ZpdjZ2azIzNGQzcG4yYXo3NWJsNjYifQ.pULvjtICSgki5B_X2ygeHA",
  },
}
