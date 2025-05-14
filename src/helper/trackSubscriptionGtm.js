// import { sendGTMEvent } from '@next/third-parties/google';
// import { ViewContent } from '@/helper/fbTracking';

// export const generateEventId = () => {
//   return 'evt_' + Math.random().toString(36).substr(2, 9);
// };

// export const trackSubscription = ({ formType = 'registration-form', pagePath, contentName }) => {
//   const event_id = generateEventId();

//   sendGTMEvent({
//     event: 'subscription',
//     form_type: formType,
//     page_path: pagePath || window.location.pathname,
//     event_id,
//   });

//   ViewContent({
//     content_name: contentName || 'Subscription Form',
//     content_category: formType,
//     content_type: 'subscription',
//     eventId: event_id,
//   });
// };

'use client';

import { useCallback, useEffect, useRef } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';
import { ViewContent } from '@/helper/fbTracking';

const generateEventId = () => {
  return 'evt_' + Math.random().toString(36).substr(2, 9);
};

const TrackSubscriptionGtm = ({ formType = 'Unknown Form', contentName = 'Subscription Form' }) => {
  const hasTracked = useRef(false);

  const sendSubscriptionEvent = useCallback(() => {
    const event_id = generateEventId();
    const pagePath = window.location.pathname;

    sendGTMEvent({
      event: 'subscription',
      form_type: formType,
      page_path: pagePath,
      event_id,
    });

    ViewContent({
      content_name: contentName,
      content_category: formType,
      content_type: 'subscription',
      eventId: event_id,
    });

  }, [formType, contentName]);

  useEffect(() => {
    if (!hasTracked.current) {
      hasTracked.current = true;
      sendSubscriptionEvent();
    }
  }, [sendSubscriptionEvent]);

  return null;
};

export default TrackSubscriptionGtm;
