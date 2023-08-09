export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        {children}
        Template
      </div>
    </div>
  );
}
