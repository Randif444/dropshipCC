import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "./ui/card";
import { tableProducts } from "@/data/datas";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export function ProductTable() {
  return (
    <Card className="w-full px-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Niche</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>Est. Profit</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Added</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableProducts.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.niche}</TableCell>
                <TableCell>{product.source}</TableCell>
                <TableCell>{product.estimatedProfit}</TableCell>
                <TableCell>{product.score}</TableCell>
                <TableCell>{product.status}</TableCell>
                <TableCell>{product.addedAt}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-500 hover:text-blue-500 cursor-pointer"
                  >
                    <Pencil size={18} style={{ color: "black" }} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-500 hover:text-blue-500 cursor-pointer"
                  >
                    <Trash2 size={18} style={{ color: "black" }} />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
}
