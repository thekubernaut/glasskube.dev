import Head from '@docusaurus/Head';
import type {Props} from '@theme/BlogListPage/StructuredData';

export default function BlogListPageStructuredData(props: Props): JSX.Element {
  const structuredData = props;
  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
}
