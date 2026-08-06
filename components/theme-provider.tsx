"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

// Bungkus root layout kamu dengan komponen ini:
//
// // app/layout.tsx
// import { ThemeProvider } from "@/components/theme-provider";
//
// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="id" suppressHydrationWarning>
//       <body>
//         <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
//
// attribute="class" penting supaya class `dark` ditambahkan ke <html>,
// biar utility Tailwind `dark:` bisa jalan.

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
