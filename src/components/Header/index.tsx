import Link from "next/link";
import { Text } from "@radix-ui/themes";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Header() {
  return (
    <nav>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <HamburgerMenuIcon />
      </button>

      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 py-4 px-6"
        aria-label="Sidenav"
      >
        <Link href="/" className="p-4 px-0 text-left">
          BIダッシュボード
        </Link>
        <hr className="my-4 md:min-w-full" />
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>ダッシュボード</AccordionTrigger>
              <AccordionContent>
                <Link href="/trade">トレード</Link>
              </AccordionContent>
              <AccordionContent>
                <Link href="/">パターンB</Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </aside>
    </nav>
  );
}
