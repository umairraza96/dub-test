import { Typography, TypographyProps } from "@mui/material";

interface DubTypographyProps extends TypographyProps {}

export default function DubTypography({
  children,
  ...props
}: DubTypographyProps) {
  return <Typography {...props}>{children}</Typography>;
}
