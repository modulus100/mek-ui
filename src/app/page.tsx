// import Link from "next/link";
// import Image from "next/image";
// import { PanelsTopLeft } from "lucide-react";
// import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
//
// import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/mode-toggle";
//
// export default function HomePage() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
//         <div className="container h-14 flex items-center">
//           <Link
//             href="/"
//             className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
//           >
//             <PanelsTopLeft className="w-6 h-6 mr-3" />
//             <span className="font-bold">shadcn/ui sidebar</span>
//             <span className="sr-only">shadcn/ui sidebar</span>
//           </Link>
//           <nav className="ml-auto flex items-center gap-2">
//             <Button
//               variant="outline"
//               size="icon"
//               className="rounded-full w-8 h-8 bg-background"
//               asChild
//             >
//               <Link href="https://github.com/salimi-my/shadcn-ui-sidebar">
//                 <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
//               </Link>
//             </Button>
//             <ModeToggle />
//           </nav>
//         </div>
//       </header>
//       <main className="min-h-[calc(100vh-57px-97px)] flex-1">
//         <div className="container relative pb-10">
//           <section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-6">
//             <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
//               Sidebar example built on top of shadcn/ui
//             </h1>
//             <span className="max-w-[750px] text-center text-lg font-light text-foreground">
//               A stunning and functional retractable sidebar for Next.js using
//               shadcn/ui complete with desktop and mobile responsiveness.
//             </span>
//             <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-6">
//               <Button variant="default" asChild>
//                 <Link href="/dashboard">
//                   Demo
//                   <ArrowRightIcon className="ml-2" />
//                 </Link>
//               </Button>
//               <Button variant="outline" asChild>
//                 <Link
//                   href="https://ui.shadcn.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Learn shadcn/ui
//                 </Link>
//               </Button>
//             </div>
//           </section>
//           <div className="w-full flex justify-center relative">
//             <Image
//               src="/demo-light-min.png"
//               width={1080}
//               height={608}
//               alt="demo"
//               priority
//               className="border rounded-xl shadow-sm dark:hidden"
//             />
//             <Image
//               src="/demo-dark-min.png"
//               width={1080}
//               height={608}
//               alt="demo-dark"
//               priority
//               className="border border-zinc-600 rounded-xl shadow-sm hidden dark:block dark:shadow-gray-500/5"
//             />
//             <Image
//               src="/demo-mobile-light-min.png"
//               width={228}
//               height={494}
//               alt="demo-mobile"
//               className="border rounded-xl absolute bottom-0 right-0 hidden lg:block dark:hidden"
//             />
//             <Image
//               src="/demo-mobile-dark-min.png"
//               width={228}
//               height={494}
//               alt="demo-mobile"
//               className="border border-zinc-600 rounded-xl absolute bottom-0 right-0 hidden dark:lg:block"
//             />
//           </div>
//         </div>
//       </main>
//       <footer className="py-6 md:py-0 border-t border-border/40">
//         <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
//           <p className="text-balance text-center text-sm leading-loose text-muted-foreground">
//             Built on top of{" "}
//             <Link
//               href="https://ui.shadcn.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="font-medium underline underline-offset-4"
//             >
//               shadcn/ui
//             </Link>
//             . The source code is available on{" "}
//             <Link
//               href="https://github.com/salimi-my/shadcn-ui-sidebar"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="font-medium underline underline-offset-4"
//             >
//               GitHub
//             </Link>
//             .
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

import { Metadata } from 'next';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import UserLoginForm from '@/components/user-login-form';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function AuthenticationPage() {
  return (
      <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
            href="/examples/authentication"
            className={cn(
                buttonVariants({ variant: 'ghost' }),
                'absolute right-4 top-4 hidden md:right-8 md:top-8'
            )}
        >
          Login
        </Link>


        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <Image
            src="/severin-demchuk-unsplash.jpg"
            alt="Placeholder Image"
            layout='fill'
            // objectFit='contain'
            // width={500}
            // height={500}
            priority
          />
          {/*<div className="absolute inset-0 bg-zinc-900" />*/}
          <div className="relative z-20 flex items-center text-lg font-medium text-black">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-6 w-6"
                color="black"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Logo
          </div>
        </div>
        <div className="flex h-full items-center p-4 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login
              </h1>
            </div>
            <UserLoginForm />
          </div>
        </div>
      </div>
  );
}
