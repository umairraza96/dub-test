import {
  FormControl,
  InputLabel,
  InputLabelProps,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";

interface DubDropdownProps {
  label: string;
  labelProps?: InputLabelProps;
  selectProps?: SelectProps;
}
export default function DubDropdown({
  label,
  labelProps,
  selectProps,
}: DubDropdownProps) {
  return (
    <FormControl>
      <InputLabel {...labelProps}>{label}</InputLabel>
      <Select {...selectProps}>
        <MenuItem value="1">1</MenuItem>
      </Select>
    </FormControl>
  );
}
