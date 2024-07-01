import { CSPostHogProvider } from "@/components/posthog-providers";
import { Provider as JotaiProvider } from "jotai";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <CSPostHogProvider>
      <JotaiProvider>{children}</JotaiProvider>
    </CSPostHogProvider>
  );
}
