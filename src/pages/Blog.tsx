import { Calendar, Clock, ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Why Traditional Periodization Doesn't Work for Most Lifters",
    excerpt:
      "The classic periodization models were designed for competitive athletes with specific peaking goals. Here's why a more flexible, evidence-based approach works better for the general population.",
    date: "2026-02-15",
    readTime: "7 min read",
    category: "Training Philosophy",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    id: 2,
    title: "The Truth About Functional Training",
    excerpt:
      "Functional training has become one of the most misused terms in fitness. Let's cut through the noise and talk about what actually transfers to real-world performance.",
    date: "2026-01-28",
    readTime: "5 min read",
    category: "Evidence-Based Fitness",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80",
  },
  {
    id: 3,
    title: "Programming Hybrid Training: Strength Meets Conditioning",
    excerpt:
      "How to intelligently combine strength training and metabolic conditioning without compromising either. A practical framework for hybrid programming.",
    date: "2026-01-10",
    readTime: "9 min read",
    category: "Programming",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
  },
  {
    id: 4,
    title: "Band Training: More Than Just a Warm-Up Tool",
    excerpt:
      "Resistance bands are often relegated to warm-ups and rehab, but they can be a powerful primary training tool when used correctly. Here's how to integrate them.",
    date: "2025-12-20",
    readTime: "6 min read",
    category: "Training Methods",
    image: "https://images.unsplash.com/photo-1598971639058-a mayores-4c6c-b5f2-5e4a0e4c7a5b?w=800&q=80",
  },
  {
    id: 5,
    title: "Stop Overcomplicating Progressive Overload",
    excerpt:
      "Progressive overload is the most fundamental principle of training, yet many coaches and lifters make it far more complicated than it needs to be.",
    date: "2025-12-05",
    readTime: "4 min read",
    category: "Training Philosophy",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
  },
  {
    id: 6,
    title: "Evidence-Based Personal Training: Bridging Science and Practice",
    excerpt:
      "Being evidence-based doesn't mean ignoring experience — it means integrating research, clinical expertise, and client preferences into your decision-making.",
    date: "2025-11-18",
    readTime: "8 min read",
    category: "Evidence-Based Fitness",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-foreground text-background py-20">
        <div className="max-w-4xl mx-auto px-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-display tracking-tight mb-4">
            The <span className="text-primary">Blog</span>
          </h1>
          <p className="text-background/60 text-lg max-w-2xl">
            Evidence-based insights on training, programming, and the fitness
            industry from Nick Tumminello.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid gap-10">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group grid md:grid-cols-[280px_1fr] gap-6 pb-10 border-b border-border last:border-0"
            >
              <div className="overflow-hidden rounded-lg aspect-video md:aspect-[4/3] bg-muted">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                  {post.category}
                </span>
                <h2 className="text-xl font-display tracking-tight mb-3 group-hover:text-primary transition-colors cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
