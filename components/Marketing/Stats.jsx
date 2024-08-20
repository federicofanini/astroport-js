import { Shell } from "../ui/shell";

export async function Stats() {
  

  return (
    <Shell>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-16">
        <div className="text-center">
          <h3 className="font-semibold text-3xl text-rose-400">
            - 4 hrs
          </h3>
          <p className="font-light text-muted-foreground">to handle Stripe webhooks</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-3xl text-rose-400">
            - 8 hrs
          </h3>
          <p className="font-light text-muted-foreground">
            designing a landing page
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold text-3xl text-rose-400">
            - ∞ hrs
          </h3>
          <p className="font-light text-muted-foreground">overthinking...</p>
        </div>
      </div>
    </Shell>
  );
}
