import { Card } from "./ui/card";
import { Instagram, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function InstructorsSection() {
  const instructors = [
    {
      id: 1,
      name: "Mestre Carlos Demian",
      belt: "Faixa Preta 5º Grau",
      specialties: "Fundador | Técnica | Competição",
      instagram: "@carlosdemian",
      achievements: "Campeão Mundial IBJJF 2010"
    },
    {
      id: 2,
      name: "Prof. Ricardo Silva",
      belt: "Faixa Preta 3º Grau",
      specialties: "Jiu-Jitsu Adultos | No-Gi",
      instagram: "@ricardosilva",
      achievements: "Pan-Americano IBJJF 2015"
    },
    {
      id: 3,
      name: "Prof.ª Ana Martins",
      belt: "Faixa Preta 2º Grau",
      specialties: "Jiu-Jitsu Feminino | Defesa Pessoal",
      instagram: "@anamartins",
      achievements: "Bicampeã Brasileira"
    },
    {
      id: 4,
      name: "Prof. Felipe Costa",
      belt: "Faixa Preta 2º Grau",
      specialties: "Jiu-Jitsu Kids | Base Técnica",
      instagram: "@felipecosta",
      achievements: "Especialista em Pedagogia"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="uppercase tracking-wider text-sm text-gray-500 mb-4">
            Equipe de Instrutores
          </h2>
          <h3 className="text-3xl md:text-4xl text-black mb-4">
            Professores de Elite
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Time completo de faixas-pretas certificados e competidores de alto nível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {instructors.map((instructor, index) => (
            <Card 
              key={instructor.id}
              className="group overflow-hidden border-gray-300 hover:border-black transition-all duration-500 bg-white hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 bg-gradient-to-br from-gray-900 to-gray-700 overflow-hidden">
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gray-800 border-4 border-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="mb-2 uppercase tracking-wider text-black">
                  {instructor.name}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {instructor.belt}
                </p>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                  {instructor.specialties}
                </p>
                
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-600">
                  <Award className="h-4 w-4" />
                  <span>{instructor.achievements}</span>
                </div>

                <a 
                  href={`https://instagram.com/${instructor.instagram.slice(1)}`}
                  className="inline-flex items-center gap-2 text-xs text-black hover:text-gray-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                  {instructor.instagram}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
