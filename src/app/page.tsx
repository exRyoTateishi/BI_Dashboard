import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { TableLayout } from "@/components/TableLayout";

export default function Home() {
  return (
    <main className="ml-64">
      {/* <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert> */}
      <TableLayout></TableLayout>
    </main>
  );
}
