import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import PropTypes from "prop-types";

function ShoppingProductTile({ product }) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div>
        <div className="relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-[300px] object-cover rounded-t-lg"
          />
          {product?.salePrice > 0 ? (
            <Badge
              className={"absolute top-2 left-2 bg-red-500 hover:bg-red-600"}
            >
              Sale
            </Badge>
          ) : null}
        </div>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">{product?.title}</h2>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              {product?.category}
            </span>
            <span className="text-sm text-muted-foreground">
              {product?.brand}
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span
              className={`${
                product.salePrice > 0 ? "line-through" : ""
              } text-lg font-semibold text-primary`}
            >
              {product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="text-lg font-semibold text-primary">
                {product?.salePrice}
              </span>
            ) : null}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Add to Cart</Button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default ShoppingProductTile;

ShoppingProductTile.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    price: PropTypes.number,
    salePrice: PropTypes.number,
  }).isRequired,
};
