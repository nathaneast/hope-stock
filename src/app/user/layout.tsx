export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>UserLayout</div>
      {children}
    </section>
  );
}
