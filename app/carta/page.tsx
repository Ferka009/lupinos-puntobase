import ProductGrid from "@/components/products/ProductGrid";
import Container from "@/components/ui/Container";
import { products } from "@/data/products";

export default function CartaPage() {
  return (
    <main className="min-h-screen bg-lupinos-cream py-24">
      <Container>
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-lupinos-bordo">Lupinos</p>
          <h1 className="mt-4 text-5xl text-lupinos-carbon">Especialidades hechas para compartir</h1>
          <p className="mt-5 text-lupinos-cacao">Elegí los sabores que van a formar parte de tu próxima mesa.</p>
        </header>
        <ProductGrid products={products} />
      </Container>
    </main>
  );
}
