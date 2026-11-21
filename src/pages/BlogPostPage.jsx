import logoMark from "../assets/mark-white.png";
import { Link, useParams } from "react-router-dom";
import { posts } from "../data/siteData";
import NotFoundPage from "./NotFoundPage";
import BlogCard from "../components/BlogCard";
const longDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});
export default function BlogPostPage() {
  let { slug } = useParams(),
    post = posts.find((post) => post.slug === slug);
  if (!post) return <NotFoundPage />;
  let relatedPosts = posts.filter((post) => post.slug !== slug).slice(0, 2);
  return (
    <>
      <section className="page-hdr bg-chrome">
        <div className="wrap">
          <img src={logoMark} alt="" className="page-hdr__mark" />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              fontWeight: 700,
              padding: "0.2rem 0.55rem",
              borderRadius: 4,
              marginBottom: "1rem",
              display: "inline-block",
              background: "#fde8d8",
              color: "#7a4a28",
            }}
          >
            {post.category}
          </span>
          <h1
            className="display display--lg"
            style={{
              color: "var(--on-chrome)",
              maxWidth: "28ch",
              marginBottom: "1rem",
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              color: "var(--on-chrome-mute)",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--step--2)",
            }}
          >
            {longDate.format(new Date(post.date))} · {post.readTime}
          </p>
        </div>
      </section>
      <section className="section bg-white">
        <div className="wrap">
          <div className="post-body">
            {post.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <Link
            to="/blog"
            className="btn btn-outline-dark"
            style={{
              marginTop: "2rem",
            }}
          >
            ← Back to Journal
          </Link>
        </div>
      </section>
      {relatedPosts.length > 0 && (
        <section className="section bg-subtle">
          <div className="wrap">
            <p
              className="label label--teal"
              style={{
                marginBottom: "1.5rem",
              }}
            >
              Keep Reading
            </p>
            <div className="grid cols-2 gap-6">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
