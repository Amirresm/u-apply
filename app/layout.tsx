import { Roboto } from '@next/font/google';
import './globals.css'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
