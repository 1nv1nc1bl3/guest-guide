import LocalServicesPage from './LocalServicesPage';
import ArticleContentPage from './ArticleContentPage';
// import KeyPhrasesPage from './KeyPhrasesPage';

export default function ArticlePage({ data }) {
    const sections = data?.article_sections || [];
    const isLocalServices = sections.every((s) => s.link_url && !s.content);
    // const hasLinks = sections.some((s) => s.link_url);
    // const hasHero = !!data?.hero_image;
    // const hasOnlyText = sections.every(
    //     (s) => s.title && s.content && !s.link_url,
    // );

    if (isLocalServices) return <LocalServicesPage data={data} />;
    return <ArticleContentPage data={data} />;

    // if (hasHero) return <ThingsToKnowPage data={data} />;
    // if (hasOnlyText) return <KeyPhrasesPage data={data} />;
}
