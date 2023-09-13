import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import ProductDetailContainer from "../../../../Components/apps/ecommerce/ProductDetail";

const ProductDetailPage = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="product" title="Product Details" />
      <ProductDetailContainer />
    </div>
  );
};

export default ProductDetailPage;
