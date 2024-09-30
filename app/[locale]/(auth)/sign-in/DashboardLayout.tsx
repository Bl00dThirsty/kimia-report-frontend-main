import Link from "next/link"
import {
  ChevronRightIcon,
  CircleUser,
  FileBox,
  Home,
  LineChart,
  ListIcon,
  Menu,
  Package2,
  PlusSquareIcon,
  SearchIcon,
  Settings,
  Shield,
  UserCog,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import React, { ReactNode } from "react"

type DashboardLayoutProps = {
    children: ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-primary text-primary-foreground md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">KIMIA REPORT</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-primary font-semibold"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Collapsible className="grid gap-2">
                <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all font-semibold [&[data-state=open]>svg]:rotate-90">
                  <FileBox className="h-4 w-4" />
                  Reporting
                  <ChevronRightIcon className="ml-auto h-4 w-4 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="grid gap-2 pl-8">
                    <Link
                      href="/"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-primary font-semibold"
                      prefetch={false}
                    >
                      <SearchIcon className="h-4 w-4" />
                      Search Reports
                    </Link>
                    <Link
                      href="/"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-primary font-semibold"
                      prefetch={false}
                    >
                      <PlusSquareIcon className="h-4 w-4" />
                      Create Report
                    </Link>
                    <Link
                      href="/dashboard/registration/list"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-primary font-semibold"
                      prefetch={false}
                    >
                      <ListIcon className="h-4 w-4" />
                      List Reports
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="grid gap-2">
                <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all font-semibold [&[data-state=open]>svg]:rotate-90">
                  <UserCog className="h-4 w-4" />
                  Users
                  <ChevronRightIcon className="ml-auto h-4 w-4 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="grid gap-2 pl-8">
                    <Link
                      href="/"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-primary font-semibold"
                      prefetch={false}
                    >
                      <ListIcon className="h-4 w-4" />
                      List Users
                    </Link>
                    <Link
                      href="/"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-primary font-semibold"
                      prefetch={false}
                    >
                      <Shield className="h-4 w-4" />
                      User Roles
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-primary font-semibold"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-primary font-semibold"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Need Help ?</CardTitle>
                <CardDescription>
                  Contact the IT Support Team
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col bg-primary text-primary-foreground">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="">KIMIA REPORT</span>
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:bg-muted font-semibold"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Collapsible className="grid">
                <CollapsibleTrigger className="mx-[-0.65rem] flex items-center gap-3 rounded-lg px-3 py-2 transition-all font-semibold [&[data-state=open]>svg]:rotate-90">
                  <FileBox className="h-5 w-5" />
                  Reporting
                  <ChevronRightIcon className="ml-auto h-4 w-4 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="grid gap-2 pl-8">
                    <Link
                      href="/"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-primary font-semibold"
                      prefetch={false}
                    >
                      <SearchIcon className="h-4 w-4" />
                      Search Reports
                    </Link>
                    <Link
                      href="/"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-primary font-semibold"
                      prefetch={false}
                    >
                      <PlusSquareIcon className="h-4 w-4" />
                      Create Report
                    </Link>
                    <Link
                      href="/dashboard/registration/list"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-primary font-semibold"
                      prefetch={false}
                    >
                      <ListIcon className="h-4 w-4" />
                      List Reports
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Collapsible className="mx-[-0.65rem] grid gap-2">
                <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all font-semibold [&[data-state=open]>svg]:rotate-90">
                  <UserCog className="h-4 w-4" />
                  Users
                  <ChevronRightIcon className="ml-auto h-4 w-4 transition-all" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="grid gap-2 pl-8">
                    <Link
                      href="/"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-primary font-semibold"
                      prefetch={false}
                    >
                      <ListIcon className="h-4 w-4" />
                      List Users
                    </Link>
                    <Link
                      href="/"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-primary font-semibold"
                      prefetch={false}
                    >
                      <Shield className="h-4 w-4" />
                      User Roles
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-primary font-semibold"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
              <Link
                href="#"
                className="mx-[-0.65rem] flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-muted hover:text-primary font-semibold"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
                
              </nav>
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Need Help ?</CardTitle>
                    <CardDescription>
                      Contact the IT Support Team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            {/* <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search report..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form> */}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {/* Content Section */}
                { children }
          {/* Content Section End */}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout