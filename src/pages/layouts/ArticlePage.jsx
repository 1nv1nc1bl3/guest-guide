import ArticleDirectory from './ArticleDirectory';
import ArticleContent from './ArticleContent';
import ArticleText from './ArticleText';

export default function ArticlePage({ data }) {
    const sections = data?.article_sections || [];
    const hasHero = data?.hero_image;
    const hasLinks = sections.some((s) => s.link_url);

    if (hasLinks && !hasHero) return <ArticleDirectory data={data} />;
    if (hasHero) return <ArticleContent data={data} />;
    return <ArticleText data={data} />;
}
