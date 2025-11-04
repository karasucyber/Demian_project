import { Award, Users, Star, Calendar, Trophy, Dumbbell } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: Users,
      value: "2.500+",
      label: "Alunos Ativos"
    },
    {
      id: 2,
      icon: Award,
      value: "15+",
      label: "Anos de Excelência"
    },
    {
      id: 3,
      icon: Star,
      value: "98%",
      label: "Satisfação"
    },
    {
      id: 4,
      icon: Calendar,
      value: "200+",
      label: "Aulas por Semana"
    },
    {
      id: 5,
      icon: Trophy,
      value: "500+",
      label: "Títulos Conquistados"
    },
    {
      id: 6,
      icon: Dumbbell,
      value: "1200m²",
      label: "Área de Treino"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id} 
                className="text-center group hover:scale-110 transition-transform duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                  <Icon className="h-8 w-8 text-black" />
                </div>
                <div className="mb-2 text-white text-3xl">
                  {stat.value}
                </div>
                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}