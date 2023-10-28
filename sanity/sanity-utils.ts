import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "vk0ljijb",
    dataset: "singer",
    apiVersion: "2023-03-04",
  });

  return client.fetch(groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,

  }`);
}
