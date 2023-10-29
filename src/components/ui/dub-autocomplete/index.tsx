import { Autocomplete, AutocompleteProps } from "@mui/material";

export default function DubAutocomplete<
  Value,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
  FreeSolo extends boolean | undefined = false,
  ChipComponent extends React.ElementType<any> = "div"
>(
  props: AutocompleteProps<
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >
) {
  return <Autocomplete {...props} />;
}
