// PageView
export const PageView = (eventId) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView', {}, { eventID: eventId });
  } else {
    console.warn('Facebook Pixel (fbq) is not initialized.');
  }
};

// ViewContent
export const ViewContent = ({
  content_ids,
  content_type,
  content_name,
  content_category,
  value,
  currency,
  sku,
  eventId,
}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq(
      'track',
      'ViewContent',
      {
        ...(content_ids && { content_ids }),
        ...(content_type && { content_type }),
        ...(content_name && { content_name }),
        ...(content_category && { content_category }),
        ...(value && { value }),
        ...(currency && { currency }),
        ...(sku && { sku }),
      },
      { eventID: eventId }
    );
  } else {
    console.warn('Facebook Pixel (fbq) is not initialized.');
  }
};
