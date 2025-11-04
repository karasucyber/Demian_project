import { Card } from "./ui/card";
import { Target, Users, Award, Heart, Zap, Shield } from "lucide-react";

export function ValuesSection() {
  const values = [
    {
      id: 1,
      icon: Target,
      title: "Disciplina",
      description: "Formação de caráter através da prática consistente e dedicação aos princípios do Jiu-Jitsu."
    },
    {
      id: 2,
      icon: Users,
      title: "Comunidade",
      description: "Construímos uma família forte, unida pelo respeito mútuo e apoio no crescimento individual."
    },
    {
      id: 3,
      icon: Award,
      title: "Excelência",
      description: "Compromisso com o mais alto nível técnico e pedagógico em cada treino e graduação."
    },
    {
      id: 4,
      icon: Heart,
      title: "Respeito",
      description: "Honramos as tradições do Jiu-Jitsu enquanto cultivamos valores de humildade e companheirismo."
    },
    {
      id: 5,
      icon: Zap,
      title: "Inovação",
      description: "Combinamos técnicas tradicionais com metodologias modernas para otimizar o aprendizado."
    },
    {
      id: 6,
      icon: Shield,
      title: "Segurança",
      description: "Ambiente controlado e supervisionado para prática segura em todos os níveis de habilidade."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="uppercase tracking-wider text-sm text-gray-500 mb-4">
            Nossa Filosofia
          </h2>
          <h3 className="text-3xl md:text-4xl mb-4 text-black">
            Valores e Ideologia
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Os pilares que sustentam nossa metodologia de ensino e formação de atletas de alta performance
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {values.map((value, index) => (
            <Card 
              key={value.id} 
              className="group p-8 border-gray-300 hover:border-black transition-all duration-500 hover:shadow-2xl bg-white hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <div className="mb-6 w-16 h-16 rounded-full bg-black flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <value.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h4 className="mb-4 uppercase tracking-wider text-black">
                  {value.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <div className="border-l-4 border-black pl-8 py-6">
            <blockquote className="text-xl md:text-2xl text-gray-800 italic mb-4">
              "Jiu-Jitsu é mais do que uma arte marcial, é um estilo de vida que transforma o corpo, a mente e o espírito."
            </blockquote>
            <p className="uppercase tracking-wider text-sm text-gray-600">
              Escola Demian
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
