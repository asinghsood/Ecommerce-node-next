import { useEffect, useState, useMemo, useContext } from "react";
import Card from "../../molecules/Card";
import { Container, UlList, LICard } from "../../molecules/Card/Card.style";
import Pagination from "../../molecules/Pagination";
import Notification from "../../molecules/Notification";
import AppContext from "../../../AppContext";

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

const testList = [
  {
    id: 1,
    title: "Success",
    description: "Iteam is added",
    backgroundColor: "#5cb85c",
  },
];

const image = "https://picsum.photos/200/300";

const ProductListing = () => {
  const value = useContext(AppContext);
  const { setCount } = value;
  const [currentPage, setCurrentPage] = useState(1);
  const [spinner, setSpinner] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [paginationData, SetPaginationData] = useState({
    pageSize: 10,
    totalProductSize: 50,
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loaderId = document.querySelector<HTMLElement>("#loader");
    const productPage = document.querySelector<HTMLElement>("#productpage");
    if (loaderId && productPage) {
      if (!spinner) {
        loaderId.style.display = "none";
        productPage.style.opacity = "";
      } else {
        loaderId.style.display = "block";
        productPage.style.opacity = "0.3";
      }
    }
  }, [spinner]);

  useEffect(() => {
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false);
      }, 2000);
    }
  }, [showNotification]);

  const callAPI = async (pageNumber: number) => {
    setSpinner(true);
    const url = `http://localhost:3003/api/products/${pageNumber}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      const { pageSize, totalProductSize, totalCartItem } = data;
      setTimeout(() => {
        setProducts(data.products);
        SetPaginationData({ pageSize, totalProductSize });
        setSpinner(false);
        setCount(totalCartItem);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  useMemo(() => {
    callAPI(currentPage);
  }, [currentPage]);

  const addCartButton = async (productId: number) => {
    if (productId) {
      setSpinner(true);
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
        const { totalCartItem } = data;
        if (data) {
          setTimeout(() => {
            setShowNotification(true);
            setSpinner(false);
            setCount(totalCartItem);
          }, 3000);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <Container>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={paginationData.totalProductSize}
        pageSize={paginationData.pageSize}
        onPageChange={(page) => setCurrentPage(Number(page))}
      />
      <UlList>
        {products.map((item: ProductItem) => (
          <LICard key={item.id}>
            <Card image={image} addCartButton={addCartButton} id={item.id} item={item} />
          </LICard>
        ))}
      </UlList>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={paginationData.totalProductSize}
        pageSize={paginationData.pageSize}
        onPageChange={(page) => setCurrentPage(Number(page))}
      />
      {showNotification && <Notification toastList={testList} />}
    </Container>
  );
};

export default ProductListing;
