import { FilterNiche } from "@/components/filter-niche";
import { FilterStatus } from "@/components/filter-status";
import Modal from "@/components/modal";
import { Button } from "@/components/ui/button";
import { ProductTable } from "@/components/product-table";
import { Searchbar } from "@/components/search-bar";
export default function ProductsPage() {
  return (
    <div>
      <div className="fixed pt-4 w-full top-0 bg-sidebar overflow-hidden z-50">
        <div className="flex-1 pb-4 border-b">
          <div className="flex gap-4 items-center  px-4 ">
            <div>
              <div className="flex gap-1 ">
                <h1 className=" font-bold">Product Pipeline</h1>
              </div>
              <p className="text-xs text-gray-600">
                Pusat riset & evaluasi produk
              </p>
            </div>
            <div className="border-l px-5">
              <Modal>
                <Modal>
                  {/* Masukkan tombol atau desain trigger-nya di sini */}
                  <Button className="bg-blue-500 text-white px-3 py-1 rounded">
                    + New Product
                  </Button>
                </Modal>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex-1 my-4 mt-15 py-3 px-3 gap-3">
          <div className="flex justify-between items-center mb-4">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-2">
                <Searchbar />
              </div>
              <FilterStatus />
              <FilterNiche />
            </div>
            <p className="p-0 text-xs text-gray-500">6 Product</p>
          </div>
          <ProductTable />
        </div>
      </div>
    </div>
  );
}
