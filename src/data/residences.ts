export type Residence = {
  slug: string;
  name: string;
  tags: string[];
  location: string;
  description: string;
  mapQuery: string;
  image?: string;
  video?: string;
  gallery?: string[];
};

export const RESIDENCES: Residence[] = [
  {
    slug: "newton-court",
    name: "Nestaliving - Newton Court",
    tags: ["Independent", "Co-living", "Boys & Girls"],
    location: "Jagat Farm",
    description:
      "Nestaliving's Newton Court offers a unique independent co-living experience for boys and girls at Jagat Farm, far surpassing any regular PG. This fully-furnished residence is more like a second home where all your needs are effortlessly met, from housekeeping to wifi.",
    mapQuery: "Jagat Farm, Greater Noida",
    image: "/nestaliving-newton-court-1.jpeg",
    video: "/nestaliving-newton-court-video.mp4",
    gallery: [1, 2, 3, 4].map((n) => `/nestaliving-newton-court-${n}.jpeg`),
  },
  {
    slug: "tesla-house",
    name: "Nestaliving - Tesla House",
    tags: ["Boys"],
    location: "Alpha 2",
    description:
      "Nestaliving's Tesla House offers a unique living experience for boys at Alpha 2, far surpassing any regular PG. This fully-furnished residence is more like a second home where all your needs are effortlessly met, from housekeeping to wifi.",
    mapQuery: "Alpha 2, Greater Noida",
    image: "/nestaliving-tesla-house-alpha-2-1.jpeg",
    gallery: [1, 2, 3, 4, 5, 6, 7, 8].map(
      (n) => `/nestaliving-tesla-house-alpha-2-${n}.jpeg`,
    ),
  },
  {
    slug: "sarojini-house-alpha-1",
    name: "Nestaliving - Sarojini House Alpha 1",
    tags: ["Girls"],
    location: "Sarojini House, Alpha 1",
    description:
      "Nestaliving's Sarojini House Alpha 1 offers a unique living experience for girls at Alpha 1, far surpassing any regular PG. This fully-furnished residence is more like a second home where all your needs are effortlessly met, from housekeeping to wifi.",
    mapQuery: "Alpha 1, Greater Noida",
    image: "/nestaliving-sarojini-house-1.jpeg",
    video: "/nestaliving-sarojini-house-video.mp4",
    gallery: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
      (n) => `/nestaliving-sarojini-house-${n}.jpeg`,
    ),
  },
];
