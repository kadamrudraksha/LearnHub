import React from 'react';
import { HiOutlineClock } from "react-icons/hi2";

function ChapterListCard({ chapter, index }) {
  return (
    <div className="flex items-center gap-4 p-4 border-b hover:bg-muted transition">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full text-sm font-semibold">
          {index + 1}
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-base font-semibold text-foreground">{chapter?.chapterName}</h2>
        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
          <HiOutlineClock className="w-4 h-4" />
          <span>{chapter?.duration}</span>
        </div>
      </div>
    </div>
  );
}

export default ChapterListCard;
