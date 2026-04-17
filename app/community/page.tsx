'use client';

import { useEffect } from 'react';

export default function CommunityPage() {
  useEffect(() => {
    window.location.href = '/login';
  }, []);

  return null;
}
