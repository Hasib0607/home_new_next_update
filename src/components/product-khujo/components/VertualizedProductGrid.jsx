import { VariableSizeGrid as Grid } from 'react-window';
import { useRef } from 'react';

const VertualizedProductGrid = ({ products, loadMore, hasMore }) => {
  // Fixed grid configuration
  const columnCount = 4;
  const columnWidth = 250; // Fixed column width
  const rowHeight = 350; // Fixed row height
  const gridRef = useRef();

  // Cell renderer
  const Cell = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * columnCount + columnIndex;
    const product = products[index];

    if (!product) {
      return hasMore ? (
        <div style={style} className="bg-gray-100 animate-pulse"></div>
      ) : null;
    }

    return (
      <div style={style} className="p-2">
        <div className="product-card h-[330px] w-[230px] border rounded-lg">
          <img src={product.image} className="h-48 w-full object-cover" />
          <div className="p-3">
            <h3 className="font-medium">{product.name}</h3>
            <p>${product.price}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full" style={{ height: '600px' }}>
      <Grid
        ref={gridRef}
        columnCount={columnCount}
        rowCount={Math.ceil(products.length / columnCount)}
        columnWidth={() => columnWidth} // Fixed width
        rowHeight={() => rowHeight} // Fixed height
        width={columnCount * columnWidth}
        height={600}
        onItemsRendered={({ visibleRowStopIndex }) => {
          if (hasMore && visibleRowStopIndex >= Math.floor(products.length / columnCount) - 2) {
            loadMore();
          }
        }}
      >
        {Cell}
      </Grid>
    </div>
  );
};

export default VertualizedProductGrid