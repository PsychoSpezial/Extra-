import React, { useState, useEffect } from 'react';
import {
  Users,
  MessageCircle,
  Heart,
  Shield,
  Sparkles,
  Lightbulb,
  Plus,
  Send,
  AlertTriangle,
  Search,
  Filter,
  CheckCircle,
  Tag,
  RefreshCw,
  X,
  Lock
} from 'lucide-react';
import {
  CommunityPost,
  generateAnonymousPseudonym,
  filterCommunityPosts
} from '../utils/psychoLogic.ts';

export const CommunityView: React.FC = () => {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // New Post Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postCategory, setPostCategory] = useState<CommunityPost['category']>('Trauma-Bindung');
  const [postTriggerWarning, setPostTriggerWarning] = useState('');
  const [postTags, setPostTags] = useState('');
  const [userPseudonym, setUserPseudonym] = useState(generateAnonymousPseudonym());

  // Reply Drafts for each post
  const [replyDrafts, setReplyDrafts] = useState<Record<string, string>>({});
  const [openReplyPostId, setOpenReplyPostId] = useState<string | null>(null);

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/community/posts');
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts || []);
      }
    } catch (err) {
      console.error('Failed to load community posts:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitle.trim() || !postContent.trim()) return;

    const tagsArray = postTags
      .split(',')
      .map((t) => t.trim().replace(/^#/, ''))
      .filter(Boolean);

    try {
      const res = await fetch('/api/community/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: postTitle,
          content: postContent,
          category: postCategory,
          authorPseudonym: userPseudonym,
          avatarSeed: userPseudonym.toLowerCase().replace(/[^a-z0-9]/g, ''),
          triggerWarning: postTriggerWarning.trim() || undefined,
          tags: tagsArray
        })
      });

      if (res.ok) {
        const data = await res.json();
        setPosts((prev) => [data.post, ...prev]);
        setIsModalOpen(false);
        setPostTitle('');
        setPostContent('');
        setPostTriggerWarning('');
        setPostTags('');
        setUserPseudonym(generateAnonymousPseudonym());
      }
    } catch (err) {
      console.error('Error creating post:', err);
    }
  };

  const handleReact = async (postId: string, reactionType: keyof CommunityPost['reactions']) => {
    // Optimistic update
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === postId) {
          return {
            ...p,
            reactions: {
              ...p.reactions,
              [reactionType]: p.reactions[reactionType] + 1
            }
          };
        }
        return p;
      })
    );

    try {
      await fetch(`/api/community/posts/${postId}/react`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reactionType })
      });
    } catch (err) {
      console.error('Error reacting to post:', err);
    }
  };

  const handleAddReply = async (postId: string) => {
    const replyText = replyDrafts[postId]?.trim();
    if (!replyText) return;

    try {
      const res = await fetch(`/api/community/posts/${postId}/replies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: replyText,
          authorPseudonym: userPseudonym,
          avatarSeed: userPseudonym.toLowerCase().replace(/[^a-z0-9]/g, '')
        })
      });

      if (res.ok) {
        const data = await res.json();
        setPosts((prev) =>
          prev.map((p) => {
            if (p.id === postId) {
              return {
                ...p,
                replies: [...p.replies, data.reply]
              };
            }
            return p;
          })
        );
        setReplyDrafts((prev) => ({ ...prev, [postId]: '' }));
      }
    } catch (err) {
      console.error('Error replying:', err);
    }
  };

  const categories = [
    'Alle',
    'Täterdynamiken',
    'Trauma-Bindung',
    'Trennung & No Contact',
    'Körper & Nervensystem',
    'Helfersystem & Familie',
    'Alltägliche Bewältigung'
  ];

  const filteredPosts = filterCommunityPosts(posts, selectedCategory, searchQuery);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Community Header & Anonymity Pledge */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" /> 100% Anonym & Geschützt
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Anonyme Community & Peer-Austausch
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Ein sicherer Raum für Betroffene von toxischen Beziehungen und psychischer Gewalt. Teilen Sie Erfahrungen, finden Sie Bestätigung und spenden Sie anderen Mut – ohne Namen, ohne Registrierung, ohne Verfolgbarkeit.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-bold px-5 py-3 rounded-xl transition-all shadow-lg shadow-teal-950/40 text-sm cursor-pointer self-start md:self-auto shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Erfahrung anonym teilen</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-3 bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Beiträge durchsuchen..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 self-end sm:self-auto">
            <span>Ihr anonymes Pseudonym:</span>
            <span className="font-mono font-bold text-teal-300 bg-slate-950 px-2 py-1 rounded border border-slate-800">
              {userPseudonym}
            </span>
            <button
              type="button"
              onClick={() => setUserPseudonym(generateAnonymousPseudonym())}
              className="text-slate-400 hover:text-white p-1"
              title="Anderes Pseudonym würfeln"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-teal-600 text-white'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center py-12 text-slate-400 text-sm flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4 animate-spin text-teal-400" />
            Lade Community-Beiträge...
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-2">
            <MessageCircle className="w-8 h-8 text-slate-600 mx-auto" />
            <h3 className="text-sm font-bold text-slate-300">Keine Beiträge gefunden</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Seien Sie die erste Person, die zu diesem Thema ihre Gedanken teilt.
            </p>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm"
            >
              {/* Post Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-950 border border-teal-800/80 text-teal-300 flex items-center justify-center font-bold text-xs uppercase shadow-sm">
                    {post.authorPseudonym.slice(0, 2)}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-200 block">
                      {post.authorPseudonym}
                    </span>
                    <span className="text-[10px] text-slate-500 block">
                      {post.createdAt} • in {post.category}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                  {post.category}
                </span>
              </div>

              {/* Trigger Warning */}
              {post.triggerWarning && (
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-950/20 border border-amber-800/40 text-amber-300 text-xs">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>
                    <strong>Trigger-Warnung:</strong> {post.triggerWarning}
                  </span>
                </div>
              )}

              {/* Title & Body */}
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {post.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </p>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-slate-950 border border-slate-800 text-slate-400 px-2 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Reactions Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <button
                    type="button"
                    onClick={() => handleReact(post.id, 'understand')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 text-rose-400" />
                    <span>Verstehe ich</span>
                    <span className="text-[10px] bg-slate-900 px-1.5 py-0.2 rounded text-slate-400">
                      {post.reactions.understand}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleReact(post.id, 'notAlone')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors cursor-pointer"
                  >
                    <Shield className="w-3.5 h-3.5 text-sky-400" />
                    <span>Nicht allein</span>
                    <span className="text-[10px] bg-slate-900 px-1.5 py-0.2 rounded text-slate-400">
                      {post.reactions.notAlone}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleReact(post.id, 'strength')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Viel Kraft</span>
                    <span className="text-[10px] bg-slate-900 px-1.5 py-0.2 rounded text-slate-400">
                      {post.reactions.strength}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleReact(post.id, 'insightful')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors cursor-pointer"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-teal-400" />
                    <span>Hilfreich</span>
                    <span className="text-[10px] bg-slate-900 px-1.5 py-0.2 rounded text-slate-400">
                      {post.reactions.insightful}
                    </span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setOpenReplyPostId(openReplyPostId === post.id ? null : post.id)
                  }
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-teal-400" />
                  <span>{post.replies.length} Antworten</span>
                </button>
              </div>

              {/* Replies Thread */}
              {openReplyPostId === post.id && (
                <div className="pt-4 space-y-3 border-t border-slate-800/60 animate-in fade-in duration-150">
                  {post.replies.map((reply) => (
                    <div
                      key={reply.id}
                      className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-bold text-teal-300">{reply.authorPseudonym}</span>
                        <span className="text-slate-500">{reply.createdAt}</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{reply.content}</p>
                    </div>
                  ))}

                  {/* Add Reply Input */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="text"
                      value={replyDrafts[post.id] || ''}
                      onChange={(e) =>
                        setReplyDrafts({ ...replyDrafts, [post.id]: e.target.value })
                      }
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleAddReply(post.id);
                      }}
                      placeholder={`Als ${userPseudonym} antworten...`}
                      className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                    />
                    <button
                      type="button"
                      onClick={() => handleAddReply(post.id)}
                      disabled={!replyDrafts[post.id]?.trim()}
                      className="p-2 bg-teal-600 hover:bg-teal-500 disabled:opacity-40 text-white rounded-lg transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </article>
          ))
        )}
      </div>

      {/* New Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl shadow-2xl p-6 space-y-5 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h2 className="text-lg font-bold text-white">Anonymen Beitrag verfassen</h2>
                <p className="text-xs text-slate-400">
                  Veröffentlicht unter: <span className="text-teal-400 font-mono">{userPseudonym}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Kategorie wählen
                </label>
                <select
                  value={postCategory}
                  onChange={(e) => setPostCategory(e.target.value as any)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-teal-500"
                >
                  {categories.filter((c) => c !== 'Alle').map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Titel Ihres Beitrags
                </label>
                <input
                  type="text"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="z.B. Wie ich nach 3 Jahren die Trauma-Bindung durchbrochen habe..."
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Ihre Erfahrung / Ihre Frage
                </label>
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="Beschreiben Sie Ihre Situation. Keine echten Namen oder Adressen nennen..."
                  rows={5}
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Optionale Trigger-Warnung
                  </label>
                  <input
                    type="text"
                    value={postTriggerWarning}
                    onChange={(e) => setPostTriggerWarning(e.target.value)}
                    placeholder="z.B. Erwähnung von Stalking"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Schlagworte (mit Komma trennen)
                  </label>
                  <input
                    type="text"
                    value={postTags}
                    onChange={(e) => setPostTags(e.target.value)}
                    placeholder="z.B. No Contact, Gaslighting"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-400 hover:text-white cursor-pointer"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  disabled={!postTitle.trim() || !postContent.trim()}
                  className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 disabled:opacity-40 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                >
                  Anonym absenden
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
