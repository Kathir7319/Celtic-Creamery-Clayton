import React, { useState } from 'react';
import { Heart, MessageCircle, ExternalLink, X } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { INSTAGRAM_POSTS, SHOP_INFO } from '../data/creameryData';
import CreameryImage from './CreameryImage';

export default function InstagramGrid() {
  const [activePost, setActivePost] = useState(null);

  return (
    <section className="py-16 sm:py-24 bg-cream-100/70 border-t border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold uppercase tracking-wider">
            <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
            <span>Community Buzz & Parlor Wall</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            #CelticCreameryClayton on Instagram
          </h2>

          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            See what's melting hearts in Clayton. Tag us in your photos for a chance to be featured!
          </p>

          <div className="pt-1">
            <a
              href={SHOP_INFO.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-celtic-800 hover:text-celtic-900 group"
            >
              <span>Follow @celticcreameryclayton</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* 6-Item Responsive Grid with 100% Reliable Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-cream-200 cursor-pointer shadow-soft hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-cream-300"
            >
              <CreameryImage
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                fallbackType={post.fallbackType || 'ice-cream'}
                flavorName={post.tag}
              />

              {/* Tag Badge */}
              <div className="absolute top-2 left-2 z-10 bg-black/65 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                {post.tag}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-stone-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-white text-center">
                <div className="flex items-center gap-3 text-sm font-bold mb-2">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-red-400 fill-red-400" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <p className="text-[11px] text-cream-200 line-clamp-3 leading-snug">
                  {post.caption}
                </p>
                <span className="mt-2 text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                  View Post
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Tag Us Banner */}
        <div className="mt-8 text-center text-xs text-stone-500">
          <span>Craving a feature? Snap your scoop in downtown Clayton, tag </span>
          <strong className="text-stone-800">@CelticCreameryClayton</strong>
          <span> with hashtag </span>
          <strong className="text-stone-800">#CelticCreameryClayton</strong>
          <span> to be showcased! ☘️</span>
        </div>

      </div>

      {/* Instagram Post Detail Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-cream-200 relative">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-900/60 text-white hover:bg-stone-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-video w-full bg-stone-900">
              <CreameryImage
                src={activePost.imageUrl}
                alt={activePost.caption}
                className="w-full h-full object-cover"
                fallbackType={activePost.fallbackType}
              />
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-pink-500 flex items-center justify-center text-white text-xs font-bold">
                    CC
                  </div>
                  <div>
                    <span className="font-bold text-sm text-stone-900 block">@celticcreameryclayton</span>
                    <span className="text-[11px] text-stone-400">{activePost.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-semibold text-stone-600">
                  <span className="flex items-center gap-1 text-red-600">
                    <Heart className="w-4 h-4 fill-current" /> {activePost.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" /> {activePost.comments}
                  </span>
                </div>
              </div>

              <p className="text-stone-700 text-sm leading-relaxed">
                {activePost.caption}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-cream-200 text-xs">
                <span className="font-semibold text-celtic-800">
                  Irish Ice Cream • Downtown Clayton, NC
                </span>
                <a
                  href={SHOP_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-celtic-900 hover:bg-stone-900 text-white font-bold transition-all"
                >
                  View on Instagram &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
