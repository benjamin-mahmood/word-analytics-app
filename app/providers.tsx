'use client'

import { HeroUIProvider } from '@heroui/react'
import dynamic from 'next/dynamic'

// Dynamically import `ThemeProvider` with `ssr: false`
const NextThemesProvider = dynamic(
  () => import('next-themes').then((mod) => mod.ThemeProvider),
  { ssr: false } // Ensures it only renders on the client
)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <NextThemesProvider
        attribute='class'
        defaultTheme='system'
      >
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  )
}
