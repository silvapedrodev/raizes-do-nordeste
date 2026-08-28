import fs from 'fs';
import { PolicyContent } from "@/components/legal/policy-content";
import path from "path";

export default function TermsPage() {

  const filePath = path.join(process.cwd(), 'src/data/terms-use.md')
  const markdownData = fs.readFileSync(filePath, 'utf8');

  const headingRegex = /^#\s+(.+)$/gm
  const matches = [...markdownData.matchAll(headingRegex)]

  const tableOfContents = matches.map((match) => match[1].trim())

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold">Termos de uso</h1>
      <p className="text-sm mt-1 text-gray-500">Última atualização: 01 de setembro de 2026</p>

      <div className="text-gray-500 text-sm text-justify mt-4 max-w-lg">
        <p><strong>Aviso acadêmico:</strong> Este documento foi elaborado exclusivamente para fins acadêmicos e de estudo de caso. A empresa, seus dados cadastrais, contatos e demais informações apresentadas são fictícios e não possuem validade jurídica ou comercial.</p>
      </div>

      <PolicyContent content={markdownData} tableOfContents={tableOfContents} />
    </div>
  );
}