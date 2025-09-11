'use client';

import * as React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import { Button } from '@/components/Button';
import AnimatedButton from '@/components/AnimatedButton';

const scope = { React, Button, AnimatedButton };

export default function LiveCode({ code }: { code: string }) {
  return (
    <LiveProvider code={code.trim()} scope={scope} language="jsx">
      <div className="overflow-hidden rounded-xl shadow">
        <div className="flex items-center justify-center bg-neutral-900 p-20">
          <LivePreview />
        </div>
        <div className="border-t">
          <LiveEditor className="bg-black p-4 font-mono text-sm text-white" />
        </div>
        <LiveError className="bg-red-50 p-2 text-red-500" />
      </div>
    </LiveProvider>
  );
}
