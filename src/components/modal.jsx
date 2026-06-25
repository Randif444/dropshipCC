import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { FieldGroup, Field, FieldLabel } from "./ui/field";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Modal({ children }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="cursor-pointer">{children}</div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Product</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-product">Name Product *</Label>
              <Input
                id="name-product"
                name="name"
                placeholder="Contoh: Tas Kulit Warna Premium"
              />
            </Field>
            <div className="flex justify-between gap-3">
              <Field>
                <FieldLabel htmlFor="form-niche-category">
                  Niche / Category *
                </FieldLabel>
                <Select defaultValue="select-niche">
                  <SelectTrigger id="form-niche-category">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="select-niche">
                      Select Niche...
                    </SelectItem>
                    <SelectItem value="fashion-female">
                      Fashion Female
                    </SelectItem>
                    <SelectItem value="home-living">Home & Living</SelectItem>
                    <SelectItem value="electronic">Electronic</SelectItem>
                    <SelectItem value="beauty">Beauty</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="form-source">Source *</FieldLabel>
                <Select defaultValue="shopee">
                  <SelectTrigger id="form-source">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="shopee">Shopee</SelectItem>
                    <SelectItem value="tokopedia">Tokopedia</SelectItem>
                    <SelectItem value="tiktok-shop">Tiktok Shop</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <Field>
              <Label htmlFor="url-product">URL Product</Label>
              <Input
                id="url-product"
                name="url-product"
                placeholder="https://..."
              />
            </Field>
            <div className="flex justify-between gap-3 items-center">
              <Field>
                <Label htmlFor="estimated-profit">Estimated Profit (Rp)</Label>
                <Input
                  id="estimated-profit"
                  name="estimated-profit"
                  type="number"
                  placeholder="0"
                />
              </Field>
              <Field>
                <Label htmlFor="form-potential-score">
                  Potential Score (1 - 5)
                </Label>
                <Select defaultValue="five-start">
                  <SelectTrigger id="form-source">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="five-start">★★★★★ (5)</SelectItem>
                    <SelectItem value="four-start">★★★★ (4)</SelectItem>
                    <SelectItem value="three-start">★★★ (3)</SelectItem>
                    <SelectItem value="two-start">★★ (2)</SelectItem>
                    <SelectItem value="one-start">★ (1)</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <div className="flex justify-between gap-3 items-center">
              <Field>
                <Label htmlFor="form-status">Status</Label>
                <Select defaultValue="prospect">
                  <SelectTrigger id="form-status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="prospect">Prospect</SelectItem>
                    <SelectItem value="researching">Researching</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <Label htmlFor="url-competitor">URL Competitor</Label>
                <Input
                  id="url-competitor"
                  name="url-competitor"
                  placeholder="https://..."
                />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="research-notes">Research Notes</FieldLabel>
              <Textarea
                id="research-notes"
                placeholder="write research notes, competitor analysis, etc."
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save product</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
