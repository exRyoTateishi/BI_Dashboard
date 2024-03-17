import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "BI Dashboard",
  description: "BI用のダッシュボード",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
