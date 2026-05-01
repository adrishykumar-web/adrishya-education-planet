'use client';

export default function VideoPlayer({ url }: { url: string }) {
  const isYoutube = /^https?:\/\/(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)/.test(url);
  const isMp4 = /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);

  if (isYoutube) {
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/)?.[1];
    return (
      <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
        {videoId && <iframe src={`https://www.youtube.com/embed/${videoId}`} className="w-full h-full" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />}
      </div>
    );
  }

  if (isMp4) {
    return (
      <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
        <video src={url} controls className="w-full h-full" controlsList="nodownload">
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
      <iframe src={url} className="w-full h-full" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
    </div>
  );
}
