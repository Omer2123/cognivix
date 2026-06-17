'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(r => r.json())
      .then(data => { if (data.success) setBlogs(data.data); })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen bg-dark text-darktext">
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-14">
          <p className="text-xs font-black uppercase tracking-widest text-primary mb-2">Insights</p>
          <h1 className="text-5xl font-black uppercase tracking-tighter text-darktext">Blog</h1>
        </div>

        {loading ? (
          <div className="flex justify-center py-24">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-slate-500 text-sm">No posts yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map(blog => (
              <Link
                key={blog._id}
                href={`/blogs/${blog.slug}`}
                className="group bg-accent border border-slate-800 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 flex flex-col"
              >
                {blog.coverImage && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  {blog.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {blog.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 className="text-lg font-black text-darktext uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h2>
                  {blog.excerpt && (
                    <p className="text-slate-400 text-sm leading-relaxed flex-grow">{blog.excerpt}</p>
                  )}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-800">
                    <span className="text-xs text-slate-500">{blog.author || 'Cognivix'}</span>
                    <span className="text-xs text-slate-600">{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
