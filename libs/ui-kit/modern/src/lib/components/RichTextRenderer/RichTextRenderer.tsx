import { useCallback, useState } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';

export const RichTextRenderer = ({ initialValue }: any) => {
  const [editor] = useState(() => withReact(createEditor()));
  const renderElement = useCallback((params: any) => {
    const { attributes, children, element } = params;
    switch (element.type) {
      case 'h1':
        return <h1 className={`text-4 font-semibold leading-[1.5em]`} {...attributes}>{children}</h1>;
      case 'h2':
        return <h2 className={`text-[31px] font-semibold leading-[1.5em]`} {...attributes}>{children}</h2>;
      case 'h3':
        return <h3 className={`text-[28px] font-semibold`} {...attributes}>{children}</h3>;
      case 'h4':
        return <h4 className={`text-[25px] font-semibold leading-[1.5em]`} {...attributes}>{children}</h4>;
      case 'h5':
        return <h5 className={`text-[22px] font-semibold leading-[1.5em]`} {...attributes}>{children}</h5>;
      case 'h6':
        return <h6 className={`text-[19px] font-semibold leading-[1.5em]`} {...attributes}>{children}</h6>;
      case 'quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      case 'link':
        return (
          <a
            {...attributes}
            href={element.url}
            target={element.newTab ? '_blank' : '_self'}
            rel={`noreferrer`}
            className={`text-yellow-500 hover:opacity-80`}
          >
            {children}
          </a>
        );
      default:
        return <p className={`my-2`} {...attributes}>{children}</p>;
    }
  }, []);

  const renderLeaf = useCallback((params: any) => {
    const { attributes, children, leaf } = params;
    if (leaf.bold) {
      return <strong {...attributes}>{children}</strong>;
    }
    if (leaf.italic) {
      return <em {...attributes}>{children}</em>;
    }
    if(leaf.underline) {
      return <u {...attributes}>{children}</u>;
    }
    if(leaf.strikethrough) {
      return <del {...attributes}>{children}</del>;
    }
    if(leaf.code) {
      return <code {...attributes}>{children}</code>;
    }
    if(leaf.superscript) {
      return <sup {...attributes}>{children}</sup>;
    }
    if(leaf.subscript) {
      return <sub {...attributes}>{children}</sub>;
    }
    return <span {...attributes} style={{display: 'inline', ...attributes.style}}>{children}</span>;
  }, []);

  return (
    <Slate initialValue={initialValue} editor={editor}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        readOnly={true}
      />
    </Slate>
  );
};
