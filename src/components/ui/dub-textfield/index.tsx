import { TextField, TextFieldProps } from "@mui/material";

type DubTextFieldProps = TextFieldProps;

export default function DubTextField({ ...props }: DubTextFieldProps) {
  return <TextField {...props} />;
}
