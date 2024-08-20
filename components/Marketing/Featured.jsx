import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Featured() {
  return (
    <div className="grid gap-4 mb-8">
      <h3 className="text-center font-cal text-muted-foreground text-sm">
        Featured on
      </h3>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-16">
        <div className="flex items-center justify-center">
          <Link
            href="https://www.producthunt.com/"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center"
          >
            <Image 
              src="/ph.svg"
              width={30}
              height={30}
              alt="PH"
              className="mr-2"
            />
            <p className="text-muted-foreground">Product Hunt</p>
            <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="https://www.reddit.com/r/SideProject/comments/1ewuzbq/i_made_my_own_code_boilerplate_to_ship_projects/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center"
          >
            <Image 
              src="/reddit.svg"
              width={30}
              height={30}
              alt="PH"
              className="mr-2"
            />
            <p className="text-muted-foreground">Reddit</p>
            <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="https://x.com/FedericoFanini0/status/1825884176681509343"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center"
          >
            <Image 
              src="/x.svg"
              width={30}
              height={30}
              alt="PH"
              className="mr-2"
            />
            <p className="text-muted-foreground">Twitter</p>
            <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <Link
              href="https://news.ycombinator.com/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center"
            >
              <Image 
              src="/hn.svg"
              width={30}
              height={30}
              alt="PH"
              className="mr-2"
            />
              <p className="text-muted-foreground">Hacker News</p>
              <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
