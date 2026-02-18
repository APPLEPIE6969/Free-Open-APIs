import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 pt-8 border-t border-surface-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
      <div>© 2024 Open API Hub. Built for developers.</div>
      <div className="flex gap-6">
        <Link className="hover:text-primary transition-colors" href="/privacy">
          Privacy
        </Link>
        <Link className="hover:text-primary transition-colors" href="/terms">
          Terms
        </Link>
        <a className="hover:text-primary transition-colors" href="mailto:support@openapi-hub.com">
          Contact
        </a>
      </div>
    </footer>
  );
}
