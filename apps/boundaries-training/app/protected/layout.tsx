export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-5xl px-6 py-12">
        {children}
      </div>
    </main>
  );
}
