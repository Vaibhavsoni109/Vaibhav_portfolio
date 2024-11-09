import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'



// const id= process.env.REACT_APP_SANITY_PROJECT_ID;
// const token= process.env.REACT_APP_SANITY_TOKEN;
// console.log(process.env.REACT_APP_SANITY_PROJECT_ID)
const id = "gywflrp4"; // Replace with actual ID temporarily
const token = "sk859HcHvGkHtLTmHkLpMQK7nGZOmQIuCWVncMYddHeGTi5gRbZXE1iCtb237Caoyd9viv0vioJyn6x7zGnszlw6MuCKZNpto91xfhEAk9mAnlVbppdAoUdRBY2dm7dNBFSB9FjRqds4Edk7zzlJsvVcIO4rGUxty6BqGRIqdRIAgr0he1ZC";
export const client= sanityClient({
    projectId:id,
    dataset:'production',
    apiVersion:'2024-01-01',
    useCdn:true,
    token:token,

})
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);