import '../../styles/globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>web demo admin</title>
      </head>
      <body>
        
        {children}</body>
    </html>
  )
}
