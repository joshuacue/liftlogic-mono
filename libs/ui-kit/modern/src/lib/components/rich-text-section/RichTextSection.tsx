import React from 'react';
import { RichTextRenderer } from '../RichTextRenderer/RichTextRenderer';

export function RichTextSection({ content }: { content: any }) {
  if (!content) return <></>;
  return (
    <div className={`max-w-[1380px] mx-auto`}>
      <RichTextRenderer initialValue={content} />
    </div>
  );
}
