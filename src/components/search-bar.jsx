import { ButtonGroup } from "@/components/ui/button-group";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Searchbar() {
  return (
    <Field>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="seacrh name or niche..." />
      </ButtonGroup>
    </Field>
  );
}
