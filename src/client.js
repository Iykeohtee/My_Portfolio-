// import sanityClient from '@sanity/client'
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
 
export const client = createClient({   
    projectId: '0jgf8b6r', 
    dataset: 'production',
    apiVersion: '2022-02-02',
    useCdn: true,
    token: 'sk8W47aq85TDKt12OP3MEmv4t3YemKRVkxVc6N8H2Jj2kCxGRHHN89TzMnDiLyzkI2OqFQ4fPujoPQEV2osG80XW8aSQQZBnLbToYKvlmY1EFMlSWalrE8kUjlB9ZrbHewdTRY8VfUjqtZGPbXsaxMUfIVQD6I6y08yK8atKcJzBzJXOwyH8',  
    ignoreBrowserTokenWarning: true,  
})   

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);        

// https://youtu.be/H-ggK1Jw3WM?si=oOlh1nqdfTuZpMsi  