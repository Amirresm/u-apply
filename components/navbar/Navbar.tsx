export default function Navbar({ title, children }: {title: string, children: React.ReactNode }) {
  return (
    <nav className="bg-gray-300 flex items-center flex-row min-h-8 justify-between p-4">
      <h1>{title}</h1>
      <div>{children}</div>
    </nav>
  )
};