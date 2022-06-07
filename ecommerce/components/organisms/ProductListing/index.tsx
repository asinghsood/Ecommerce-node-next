import { useEffect, useState, useMemo } from "react";
import Card from "../../molecules/Card";
import { Container, UlList, LICard } from "../../molecules/Card/Card.style";
import Pagination from "../../molecules/Pagination";

interface ProductItem {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const image = "https://picsum.photos/200/300";

const ProductListing = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationData, SetPaginationData] = useState({
    pageSize: 10,
    totalProductSize: 50,
  });
  const [products, setProducts] = useState([]);

  const callAPI = async (pageNumber: number) => {
    const url = `http://localhost:3003/api/products/${pageNumber}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const { pageSize, totalProductSize } = data;
      console.log(data);
      setProducts(data.products);
      SetPaginationData({ pageSize, totalProductSize });
    } catch (err) {
      console.log(err);
    }
  };

  useMemo(() => {
    callAPI(currentPage);
  }, [currentPage]);

  const addCartButton = async (productId: number) => {
    if (productId) {
      try {
        const url = `http://localhost:3003/api/cart/add`;
        const res = await fetch(url, {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            productId: productId,
          }),
        });
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container>
      <Pagination
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={paginationData.totalProductSize}
        pageSize={paginationData.pageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
      <UlList>
        {products.map((item: ProductItem) => (
          <LICard key={item.id}>
            <Card image={image} addCartButton={addCartButton} id={item.id} />
          </LICard>
        ))}
      </UlList>
      <Pagination
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={paginationData.totalProductSize}
        pageSize={paginationData.pageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </Container>
  );
};

export default ProductListing;
