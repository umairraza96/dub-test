import { CircularProgress, CircularProgressProps } from "@mui/material";

interface DubLoaderProps extends CircularProgressProps {}

export default function DubLoader({ ...props }: DubLoaderProps) {
  return <CircularProgress {...props} />;
}
