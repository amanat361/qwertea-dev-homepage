import "./index.css";
import { useState } from "react";

type Service = {
  name: string;
  url: string;
  description: string;
  isPublic: boolean;
  icon?: string;
};

export function App() {
  const [services] = useState<Service[]>([
    {
      name: "Samantics",
      url: "https://play.qwertea.dev",
      description: "A game experience",
      isPublic: true,
      icon: "🎮"
    },
    {
      name: "Uptime Monitor",
      url: "https://kuma.qwertea.dev",
      description: "Service status dashboard",
      isPublic: true,
      icon: "📊"
    },
    {
      name: "Local LLMs",
      url: "https://gpt.qwertea.dev",
      description: "Open WebUI for local LLMs",
      isPublic: true,
      icon: "🤖"
    },
    {
      name: "Ollama API",
      url: "https://ollama.qwertea.dev",
      description: "API endpoint (requires Cloudflare API key)",
      isPublic: false,
      icon: "🔌"
    },
    {
      name: "SSH Access",
      url: "https://ssh.qwertea.dev",
      description: "SSH port (requires Cloudflared clients and authentication)",
      isPublic: false,
      icon: "🔒"
    },
    {
      name: "Supabase",
      url: "https://supabase.qwertea.dev",
      description: "Database instance (requires Zero Trust auth)",
      isPublic: false,
      icon: "🗄️"
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto p-8">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500">
            qwertea.dev
          </h1>
          <p className="text-slate-300 text-xl">
            Service directory for local development
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="bg-green-500/10 text-green-400 p-1 rounded-md mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Public Services
            </h2>
            <div className="space-y-4">
              {services
                .filter((service) => service.isPublic)
                .map((service) => (
                  <ServiceCard key={service.name} service={service} />
                ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <span className="bg-amber-500/10 text-amber-400 p-1 rounded-md mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Private Services
            </h2>
            <div className="space-y-4">
              {services
                .filter((service) => !service.isPublic)
                .map((service) => (
                  <ServiceCard key={service.name} service={service} />
                ))}
            </div>
          </div>
        </div>

        <div className="mt-16 p-6 rounded-lg bg-slate-800/50 border border-slate-700/50">
          <h2 className="text-xl font-semibold mb-3 text-slate-200">
            About This Setup
          </h2>
          <div className="space-y-2 text-slate-300 text-sm">
            <p>
              This development environment is powered by a desktop running an
              RTX 3080 GPU using WSL (Windows Subsystem for Linux) with
              Cloudflare tunnels to expose local services to the web.
            </p>
            <p className="pt-2">
              Created by{" "}
              <a
                href="https://saminamanat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                Samin Amanat
              </a>
              . Visit my personal website to learn more about my other projects
              and work.
            </p>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-700/30 text-center text-slate-400 text-sm">
          <p>
            © {new Date().getFullYear()} qwertea.dev • All services running on
            Cloudflare tunnels •{" "}
            <a href="https://github.com/amanat361/qwertea-dev-homepage">
              View on Github
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`service-card block p-4 rounded-lg ${
        service.isPublic
          ? "bg-gradient-to-br from-teal-900/40 to-blue-900/40 hover:from-teal-800/40 hover:to-blue-800/40 border border-teal-700/30"
          : "bg-gradient-to-br from-amber-900/30 to-pink-900/30 hover:from-amber-800/30 hover:to-pink-800/30 border border-amber-700/30"
      }`}
    >
      <div className="flex items-start">
        <div className="text-2xl mr-3">{service.icon}</div>
        <div>
          <h3 className="font-medium text-lg flex items-center">
            {service.name}
            {!service.isPublic && (
              <span className="ml-2 text-xs font-normal px-2 py-0.5 rounded-full bg-amber-900/50 text-amber-300">
                Private
              </span>
            )}
          </h3>
          <p className="text-sm text-slate-300 mt-1">{service.description}</p>
          <div className="text-xs text-slate-400 mt-2 font-mono">{service.url.replace("https://", "")}</div>
        </div>
      </div>
    </a>
  );
}

export default App;
