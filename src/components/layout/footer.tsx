import { LinkExternal } from "../ui/custom/link-external";

export const WebsiteLayoutFooter = () => (
  <footer className="bg-slate-100 py-2">
    <div className="container flex flex-col sm:flex-row items-center justify-between whitespace-wrap space-x-4">
      <span>
        © {new Date().getFullYear()} Website. Todos os direitos reservados
      </span>

      <span>
        Powered by{" "}
        <LinkExternal
          href="https://www.linkedin.com/in/daniel-hortencio/"
          className="font-bold"
        >
          Daniel Hortencio
        </LinkExternal>
      </span>
    </div>
  </footer>
);
