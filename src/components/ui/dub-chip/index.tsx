import { Chip, ChipProps } from "@mui/material";

interface DubChipProps extends ChipProps {}

export default function DubChip({ children, ...props }: DubChipProps) {
  return <Chip {...props}>{children}</Chip>;
}
