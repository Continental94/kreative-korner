import logoMark from "../assets/mark-white.png";
import { posts } from "../data/siteData";
import BlogCard from "../components/BlogCard";
export default function BlogPage() {
  return (
    <>
      <section className="page-hdr bg-chrome">
        <div className="wrap">
          <img src={logoMark} alt="" className="page-hdr__mark" />
          <p
            className="label"
            style={{
              color: "var(--brand-copper)",
              marginBottom: "0.75rem",
            }}
          >
            From the Journal
          </p>
          <h1
            className="display display--lg"
            style={{
              color: "var(--on-chrome)",
              maxWidth: "22ch",
              marginBottom: "1.25rem",
            }}
          >
            Notes on building, branding and learning.
          </h1>
          <p
            style={{
              color: "var(--on-chrome-mute)",
              maxWidth: "48ch",
              lineHeight: 1.65,
            }}
          >
            Short, practical writing from the Kreative Korner team — on projects, the
            Academy, and what we’re noticing in the field.
          </p>
        </div>
      </section>
      <section className="section bg-white">
        <div className="wrap">
          <p
            className="label label--teal"
            style={{
              marginBottom: "1.5rem",
            }}
          >
            {posts.length} Articles
          </p>
          <div className="grid cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
