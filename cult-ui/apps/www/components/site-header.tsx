"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"

import { DistortedGlass } from "./distorted-glass"

export function SiteHeader() {
  let pathname = usePathname()
  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full    ",
          pathname?.includes("/docs")
            ? "-mb-12 bg-[#FAFAFA]   backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:backdrop-blur-xl dark:bg-[#171517]"
            : "-mb-14"
        )}
      >
        {/* <header className="sticky top-0 z-50 w-full -mb-12  lg:backdrop-blur-xl backdrop-filter bg-gradientTopRightLightHeaderSm/70  md:bg-gradientTopRightLightHeader  backdrop-blur supports-[backdrop-filter]:bg-background/60 "> */}
        <div className="container flex h-14 max-w-screen-2xl items-center ">
          <MainNav />
          <MobileNav />
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            {!pathname?.includes("/docs") ? (
              <div className="hidden lg:block lg:w-full">
                <DistortedGlass></DistortedGlass>
              </div>
            ) : null}

            <div className="w-full flex-1 md:w-auto md:flex-none">
              <CommandMenu />
            </div>
            <nav className="flex items-center ">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.gitHub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({
                      variant: "ghost",
                    }),
                    "w-9 px-0"
                  )}
                >
                  <Icons.twitter className="h-3 w-3 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </Link>
              {pathname?.includes("/docs") ? <ModeToggle /> : null}
            </nav>
          </div>
        </div>
      </header>
      {/* <div className="animate-slide-up fixed inset-x-1/2 top-0 z-50 md:absolute">
        <div className=" flex w-full flex-col items-center justify-center">
          <DistortedGlass></DistortedGlass>
        </div>
      </div> */}
    </>
  )
}
