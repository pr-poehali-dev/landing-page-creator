import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const achievements = [
    { icon: "Code", title: "50+", subtitle: "Проектов завершено" },
    { icon: "Users", title: "30+", subtitle: "Довольных клиентов" },
    { icon: "Award", title: "5+", subtitle: "Лет опыта" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Обо мне
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Я страстный разработчик с творческим подходом к решению задач
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-white/90 leading-relaxed">
              Привет! Меня зовут Арсений, и я разработчик с 5+ летним опытом
              создания современных веб-приложений. Моя страсть — превращать
              сложные идеи в красивые и функциональные интерфейсы.
            </p>

            <p className="text-lg text-white/80 leading-relaxed">
              Специализируюсь на React, TypeScript и современных технологиях
              фронтенда. Люблю работать над проектами, которые решают реальные
              проблемы пользователей и приносят пользу бизнесу.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind",
                "Node.js",
                "GraphQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {achievements.map((item, index) => (
              <Card
                key={index}
                className="bg-white/10 border-white/20 backdrop-blur-sm card-hover"
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Icon
                      name={item.icon as any}
                      className="text-white"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-white/80">{item.subtitle}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
