import Link from 'next/link';
import React from 'react';


export default function LinkButton({ textButton, linkHref = '' }){
  return (
    <div style={{ padding: 8}}>
      <Link className="bg-maingreen border-mainred p-2" href={linkHref}> {textButton}</Link>
    </div>
  );
};
