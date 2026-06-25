import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export function TextareaField({ children }) {
  return (
    <Field>
      <FieldLabel htmlFor="textarea-message">{children}</FieldLabel>
      <Textarea id="textarea-message" placeholder={children} />
    </Field>
  );
}
