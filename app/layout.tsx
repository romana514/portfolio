import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Most. Romana Akter Ria | Front-End Developer",
  description:
    "Front-end developer specializing in React, Next.js, and TypeScript with 5+ years of experience building modern web applications.",
  keywords: ["front-end developer", "react developer", "next.js developer", "web developer", "UI developer"],
  authors: [{ name: "Most. Romana Akter Ria" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe.dev",
    title: "John Doe | Front-End Developer",
    description:
      "Front-end developer specializing in React, Next.js, and TypeScript with 5+ years of experience building modern web applications.",
    siteName: "John Doe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Most. Romana Akter Ria | Front-End Developer",
    description:
      "Front-end developer specializing in React, Next.js, and TypeScript with 5+ years of experience building modern web applications.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'