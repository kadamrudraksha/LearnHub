import React from 'react';
import ReactMarkdown from 'react-markdown';
import YouTube from 'react-youtube';

const opts = {
  height: '500',
  width: '100%',
  playerVars: {
    autoplay: 0,
  },
};

function ChapterContent({ chapter, content }) {
  return (
    <div className="p-6 md:p-10 space-y-8">
      {/* Chapter title and description */}
      <div>
        <h2 className="text-3xl font-bold text-foreground">{chapter?.chapterName}</h2>
        <p className="text-muted-foreground mt-2">{chapter?.about}</p>
      </div>

      {/* Video section */}
      <div className="flex justify-center">
        {content?.videoId ? (
          <YouTube videoId={content?.videoId} opts={opts} />
        ) : (
          <p className="text-red-500 font-medium">Video is not available for this chapter.</p>
        )}
      </div>

      {/* Chapter content list */}
      <div className="space-y-6">
        {content?.content?.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-slate-50 border border-slate-200 shadow-sm space-y-4"
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>

            {item.explanation && (
              <div>
                <h4 className="text-md font-medium text-primary">Explanation</h4>
                <p className="text-muted-foreground">{item.explanation}</p>
              </div>
            )}

            {item.in_details && (
              <div className="prose prose-slate max-w-none">
                <ReactMarkdown>{item.in_details}</ReactMarkdown>
              </div>
            )}

            {item.code && (
              <div className="bg-zinc-900 text-white rounded-md p-4 overflow-x-auto">
                <h4 className="text-sm font-semibold text-green-400 mb-2">Code</h4>
                <pre className="whitespace-pre-wrap text-sm">{item.code}</pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterContent;
