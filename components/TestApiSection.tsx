"use client";

import { useState } from "react";

interface TestApiSectionProps {
  initialUrl: string;
}

export default function TestApiSection({ initialUrl }: TestApiSectionProps) {
  const [url, setUrl] = useState(initialUrl);
  const [method, setMethod] = useState("GET");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTest = async () => {
    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      // Use our internal proxy to avoid CORS issues
      const res = await fetch("/api/proxy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url,
          method: method,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch");
      }

      setResponse(JSON.stringify(data, null, 2));
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface-dark rounded-xl border border-surface-border p-6 mt-6">
      <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">science</span>
        Test API Endpoint
      </h3>

      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-2">
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="bg-black border border-surface-border rounded-lg px-3 py-2 text-white text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
          >
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
            <option value="DELETE">DELETE</option>
          </select>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://api.example.com/v1/resource"
            className="flex-1 bg-black border border-surface-border rounded-lg px-4 py-2 text-white text-sm placeholder-zinc-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none"
          />
        </div>

        <button
          onClick={handleTest}
          disabled={loading || !url}
          className="bg-primary hover:bg-primary-dark text-black font-semibold px-6 py-2 rounded-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 w-full md:w-auto"
        >
          {loading ? (
            <span className="material-symbols-outlined animate-spin text-[20px]">refresh</span>
          ) : (
            <span className="material-symbols-outlined text-[20px]">play_arrow</span>
          )}
          Send Request
        </button>

        {error && (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            Error: {error}
          </div>
        )}

        {response && (
          <div className="relative group mt-4">
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => navigator.clipboard.writeText(response)}
                className="p-1.5 rounded bg-surface-border hover:bg-surface-hover hover:scale-105 transition-all duration-300 text-zinc-400 hover:text-white"
                title="Copy JSON"
              >
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
              </button>
            </div>
            <pre className="bg-black border border-surface-border rounded-lg p-4 overflow-x-auto text-xs font-mono text-zinc-300 max-h-[400px] scrollbar-hide whitespace-pre-wrap break-words">
              {response}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
