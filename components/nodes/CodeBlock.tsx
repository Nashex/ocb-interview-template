import Prism from 'prismjs';

import * as React from 'react';

export function CodeBlock({children, 'data-language': language}) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false);
  }, [children]);

  return (
    <div className="code relative" aria-live="polite">
      <pre
        ref={ref}
        className={`language-${language}`}
      >
        {children}
      </pre>
      <style jsx>
        {`
          /* Override Prism styles */
          .code :global(pre[class*='language-']) {
            text-shadow: none;
            border-radius: 4px;
          }
        `}
      </style>
    </div>
  );
}
