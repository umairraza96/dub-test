import {
  Card,
  CardActionArea,
  CardActionAreaProps,
  CardContent,
  CardContentProps,
  CardHeader,
  CardHeaderProps,
  CardMedia,
  CardMediaProps,
  CardProps,
} from "@mui/material";

interface DubCardProps extends CardProps {}
interface DubCardHeaderProps extends CardHeaderProps {}

export default function DubCard({ ...props }: DubCardProps) {
  return <Card {...props}></Card>;
}

DubCard.Media = function DubCardMedia({ ...props }: CardMediaProps) {
  return <CardMedia {...props}></CardMedia>;
};

DubCard.Header = function DubCardTitle({ ...props }: DubCardHeaderProps) {
  return <CardHeader {...props}></CardHeader>;
};

DubCard.Content = function DubCardContent({ ...props }: CardContentProps) {
  return <CardContent {...props}></CardContent>;
};

DubCard.CardActionArea = function DubCardActionArea({
  children,
  ...props
}: CardActionAreaProps) {
  return <CardActionArea {...props}>{children}</CardActionArea>;
};
