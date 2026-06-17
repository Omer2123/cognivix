'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BlogPostPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/blogs/${slug}`)
      .then(r => r.json())
      .then(data => {
        if (data.success) setBlog(data.data);
        else router.push('/blogs');
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-dark flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  if (!blog) return null;

  return (
    <main className="min-h-screen bg-dark text-darktext">
      {blog.coverImage && (
        <div className="w-full h-72 md:h-96 overflow-hidden mt-28">
          <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover" />
        </div>
      )}

      <article className={`max-w-3xl mx-auto px-6 pb-16 ${blog.coverImage ? 'pt-10' : 'pt-40'}`}>
        {blog.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map(tag => (
              <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-darktext mb-4">
          {blog.title}
        </h1>

        <div className="flex items-center gap-4 text-xs text-slate-500 mb-10 pb-8 border-b border-slate-800">
          {blog.author && <span>By <span className="text-slate-300 font-bold">{blog.author}</span></span>}
          <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>

        {blog.excerpt && (
          <p className="text-lg text-slate-300 leading-relaxed mb-8 italic">{blog.excerpt}</p>
        )}

        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight
            prose-a:text-primary hover:prose-a:text-primary/80
            prose-img:rounded-xl prose-img:border prose-img:border-slate-800
            prose-blockquote:border-l-primary prose-blockquote:text-slate-400"
          dangerouslySetInnerHTML={{ __html: blog.content || '' }}
        />

        <div className="mt-16 pt-8 border-t border-slate-800">
          <Link href="/blogs" className="text-xs font-black uppercase tracking-widest text-primary hover:text-primary/80 transition">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
}
