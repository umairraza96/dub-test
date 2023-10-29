import DubCard from "../ui/dub-card";
import DubTypography from "../ui/dub-typography";
interface ArticleCardProps {
  title: string;
  author?: string;
  urlToImage?: string;
  description?: string;
  url: string;
}

export default function ArticleCard({
  title,
  author,
  urlToImage,
  description,
  url,
}: ArticleCardProps) {
  function onArticleClick() {
    window.open(url, "_blank");
  }
  return (
    <DubCard.CardActionArea sx={{ maxWidth: 345, minWidth: 345 }}>
      <DubCard sx={{ height: "100%" }} onClick={onArticleClick}>
        <DubCard.Header
          title={<DubTypography fontWeight="bold">{title}</DubTypography>}
          titleTypographyProps={{
            variant: "h6",
          }}
          subheader={author}
          subheaderTypographyProps={{
            variant: "subtitle2",
          }}
        />
        <DubCard.Media sx={{ height: 240 }} image={urlToImage} title={title} />
        <DubCard.Content>
          <DubTypography variant="body2">{description}</DubTypography>
        </DubCard.Content>
      </DubCard>
    </DubCard.CardActionArea>
  );
}
