import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemHeaderAuthor from '@theme/BlogPostItem/Header/Author';
import type {Props} from '@theme/BlogPostItem/Header/Authors';
import clsx from 'clsx';
import styles from './styles.module.css';

// Component responsible for the authors layout
export default function BlogPostItemHeaderAuthors({
  className,
}: Props): JSX.Element | null {
  const {
    metadata: {authors},
    assets,
  } = useBlogPost();
  const authorsCount = authors.length;
  if (authorsCount === 0) {
    return null;
  }
  return (
    <div className={clsx(styles.imageOnlyAuthorRow, className)}>
      {authors.map((author, idx) => (
        <div key={idx}>
          <BlogPostItemHeaderAuthor
            author={{
              ...author,
              // Handle author images using relative paths
              imageURL: assets.authorsImageUrls[idx] ?? author.imageURL,
            }}
          />
        </div>
      ))}
    </div>
  );
}
