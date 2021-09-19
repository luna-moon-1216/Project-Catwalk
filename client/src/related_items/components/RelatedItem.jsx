import React from 'react';

import RelatedProducts from './RelatedProducts';
import OutfitProducts from './Outfit';
import '../styles/RelatedItems.css';

const RelatedItems = ({ currentProductId, currentStyleId }) => {

  return (
    <div id="related-items">
      <div id="related-carousel">
        <RelatedProducts currentProductId={currentProductId} />
      </div>
      <div id="outfit-carousel">
        <OutfitProducts currentProductId={currentProductId} currentStyleId={currentStyleId} />
      </div>
    </div>
  )
}

export default RelatedItems;