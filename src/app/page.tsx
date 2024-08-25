import { ProductType } from "@/interfaces";
import Product from "../components/product";
import Hero from "@/components/hero";

const HomePage = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0">
      <Hero />
      <section className="flex flex-col space-y-12">
        <h1 className="text-5xl font-bold text-center">SAMMI SHOP DEALS</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
          {products.map((c) => {
            return <Product product={c} key={c.id} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
