export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  contentPart2?: string;
  coverImage: string;
  author: string;
  authorImage?: string;
  authorBio?: string;
  date: string;
  lastUpdated?: string;
  readTime: number;
  tags: string[];
  tableOfContents?: { id: string; title: string }[];
  faq?: { question: string; answer: string }[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image?: string;
}