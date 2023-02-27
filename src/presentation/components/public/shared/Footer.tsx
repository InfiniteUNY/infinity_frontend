export function PublicFooter() {
  return (
    <>
      <section></section>
      <footer className="flex items-center h-12">
        <p className="max-w-2xl mx-auto text-slate-400 text-sm text-center font-mono">
          Made with &#128154; by INFINITE UNY. &copy; {new Date().getFullYear()} INFINITE UNY.
        </p>
      </footer>
    </>
  );
}
