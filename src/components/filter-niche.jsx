import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function FilterNiche() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48">
        <SelectValue placeholder="Select niche" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Niche</SelectLabel>
          <SelectItem value="all-niche">All niche</SelectItem>
          <SelectItem value="women-fashion">Womens&apos;s fashion</SelectItem>
          <SelectItem value="home-living">Home & Living</SelectItem>
          <SelectItem value="electronic">Electronic</SelectItem>
          <SelectItem value="beauty">Beauty</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
