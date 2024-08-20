import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { CardIcon } from "./lib/CardUtils";
import { Button } from "../ui/button";
import { formatDate } from "@/lib/utils";

const latestChangelogs = [
  {
    id: 0,
    publishedAt: "2024-02-19",
    title: "test"
  }
]

export function Ship() {
  

  return (
    <Card>
      <CardHeader>
        <CardIcon icon="zap" />
        <CardTitle>We ship</CardTitle>
        <CardDescription>
          Check out the changelog to see our latest features.
        </CardDescription>
      </CardHeader>
      <ul className="mx-auto w-full max-w-xs">
        {latestChangelogs.map((changelog) => (
          <li
            key={changelog.id}
            className="group relative grid gap-2 border-accent border-l-2 px-4 py-2"
          >
            <Link href={`/changelog/${changelog.id}`}>
              <div className="-left-1.5 absolute top-4 h-2.5 w-2.5 rounded-full bg-border group-hover:bg-muted-foreground" />
              <p className="text-muted-foreground">
                {formatDate(new Date(changelog.publishedAt))}
              </p>
              <p className="line-clamp-1 font-medium text-lg">
                {changelog.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Button className="rounded-full" asChild>
          <Link href="/changelog">Full changelog</Link>
        </Button>
      </div>
    </Card>
  );
}
