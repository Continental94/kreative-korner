import { Link } from "react-router-dom";
const shortDate = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
export default function BlogCard({ post }) {
  let pillar = post.pillar || "creative";
  return (
    <article className="blog-card">
      <span
        className={`blog-card__tag blog-card__tag--${post.category?.toLowerCase().replace(/\s+/g, "-") || pillar}`}
      >
        {post.category}
      </span>
      <h3 className="blog-card__title">
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className="blog-card__excerpt">{post.excerpt}</p>
      <div className="blog-card__meta">
        <span>{shortDate.format(new Date(post.date))}</span>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>
      <Link
        to={`/blog/${post.slug}`}
        className={`blog-card__read-more blog-card__read-more--${post.category?.toLowerCase().replace(/\s+/g, "-") || pillar}`}
      >
        Read post →
      </Link>
    </article>
  );
}
