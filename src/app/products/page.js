import Modal from "@/components/modal";
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
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
