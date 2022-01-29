import Head from 'next/head';

type Props = {
  title: string;
  description?: string;
  hasAppTitleSuffix?: boolean;
};

const APP_TITLE = 'Boilerplate';
const DEFAULT_DESCRIPTION = '';

export default function PageHead(props: Props) {
  const {
    title,
    description = DEFAULT_DESCRIPTION,
    hasAppTitleSuffix = true,
  } = props;

  return (
    <Head>
      <title>{hasAppTitleSuffix ? `${title} | ${APP_TITLE}` : title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
