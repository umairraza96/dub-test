import { Switch, SwitchProps } from "@mui/material";

interface DubToggleProps extends SwitchProps {}

export default function DubToggle({ ...props }: DubToggleProps) {
  return <Switch {...props} />;
}
