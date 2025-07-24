import './globals.css'

export const metadata = {
  title: 'Feedback Board',
  description: 'A simple feedback board app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}