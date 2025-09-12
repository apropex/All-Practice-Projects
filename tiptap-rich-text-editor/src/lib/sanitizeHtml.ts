
/*

//* backend

import sanitizeHtml from "sanitize-html";

const clean = sanitizeHtml(userInput, {
  allowedTags: [ "b", "i", "em", "strong", "a", "p", "ul", "ol", "li" ],
  allowedAttributes: {
    'a': [ 'href', 'title' ],
  },
});

saveToDB(clean);



//* frontend

import DOMPurify from "dompurify";

function BlogContent({ content }: { content: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
    />
  );
}







*/