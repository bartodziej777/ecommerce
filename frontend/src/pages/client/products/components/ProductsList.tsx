import Product, { ProductType } from "./Product";

export default function ProductsList({
  products,
}: {
  products: Array<ProductType>;
}) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((prod: ProductType) => (
        <Product
          id={prod.id}
          name={prod.name}
          price={prod.price}
          imagePath={prod.imagePath}
          key={prod.id}
        />
      ))}
    </section>
  );
}
