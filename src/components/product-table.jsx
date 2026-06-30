"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "./ui/card";
import { useProducts, useDeleteProduct } from "@/hooks/useProducts";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export function ProductTable() {
  const { data: products, isLoading, isError, error } = useProducts();
  const { mutate: deleteData, isPending: isDeleting } = useDeleteProduct();

  const handleDelete = (id, name) => {
    if (window.confirm(`Yakin ingin menghapus product "${name}"?`)) {
      deleteData(id);
    }
  };

  const handleEdit = (product) => {
    console.log("Edit product: ", product);
    alert(`Membuka from edit untuk: ${product.name}`);
  };

  if (isLoading) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        Memuat data product...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-4 text-center text-red-500">
        Gagal memuat data: {error.message}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="p-4 text-center">Belum ada product di pipeline!</div>
    );
  }

  return (
    <Card className="w-full px-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Niche</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>URL</TableHead>
            <TableHead>Competitor URL</TableHead>
            <TableHead>Est. Profit</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Notes</TableHead>
            <TableHead>Created at</TableHead>
            <TableHead>Updated at</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.niche}</TableCell>
                <TableCell>{product.source}</TableCell>
                <TableCell>{product.url}</TableCell>
                <TableCell>{product.competitor_url}</TableCell>
                <TableCell>{product.profit_estimate}</TableCell>
                <TableCell>{product.score}</TableCell>
                <TableCell>{product.status}</TableCell>
                <TableCell>{product.notes}</TableCell>
                <TableCell>{product.created_at}</TableCell>
                <TableCell>{product.updated_at}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-500 hover:text-blue-500 cursor-pointer"
                    onClick={() => handleEdit(product)} // <-- Action Edit
                  >
                    <Pencil size={18} style={{ color: "black" }} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-500 hover:text-blue-500 cursor-pointer"
                    onClick={() => handleDelete(product.id, product.name)} // <-- Action Delete
                    disabled={isDeleting} // Disable tombol saat proses hapus berjalan
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
