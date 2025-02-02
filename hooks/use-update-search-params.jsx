import { useSearchParams } from "next/navigation";
import * as React from "react";

export default function useUpdateSearchParams() {
  const searchParams = useSearchParams();

  /**
   * Get a new searchParams string by merging the current searchParams with a provided key/value pair.
   * If param is `null`, will be deleted.
   */
  const update = React.useCallback(
    (params) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams],
  );

  return update;
}
