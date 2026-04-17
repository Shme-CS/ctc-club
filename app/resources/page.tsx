'use client';

import { useEffect } from 'react';

export default function ResourcesPage() {
  useEffect(() => {
    window.location.href = '/login';
  }, []);

  return null;
}
