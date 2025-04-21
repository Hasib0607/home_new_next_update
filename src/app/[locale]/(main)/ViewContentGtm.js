'use client';

import { useCallback, useEffect, useRef } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';
import { ViewContent } from '@/helper/fbTracking';

const generateEventId = () => {
  return 'evt_' + Math.random().toString(36).substr(2, 9);
};

const ViewContentGtm = ({ title, category }) => {
  const hasTracked = useRef(false);

  const sendViewContentEvent = useCallback(() => {
    const event_id = generateEventId();

    sendGTMEvent({
      event: 'view_content',
      pageType: 'blog-post',
      blog_title: title,
      blog_category: category || 'Uncategorized',
      event_id,
    });

    ViewContent({
      content_name: title,
      content_category: category || 'Uncategorized',
      content_type: 'blog',
      eventId: event_id,
    });

  }, [title, category]);

  useEffect(() => {
    if (!hasTracked.current) {
      hasTracked.current = true;
      sendViewContentEvent();
    }
  }, [sendViewContentEvent]);

  return null;
};

export default ViewContentGtm;
