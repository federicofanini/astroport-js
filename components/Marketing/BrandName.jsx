import Link from "next/link";
import * as React from "react";

// Hottake: you don't need a features page if you have a changelog page
// Except for SEO

import Image from "next/image";

export function BrandName() {
  return (
    
    <Link href="/" className="flex items-center gap-2 font-semibold">
      <Image
        src="/icon.png"
        alt="AstroPort"
        height={30}
        width={30}
        className="rounded-full bg-transparent"
      />
      Astroport
    </Link>

  );
}
