import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProjectsShowcase = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Современная платформа электронной коммерции с интуитивным интерфейсом",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB"],
      demo: "#",
      github: "#",
    },
    {
      title: "Task Management App",
      description:
        "Приложение для управления задачами с функциями совместной работы",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Express", "PostgreSQL"],
      demo: "#",
      github: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Интерактивная панель с прогнозом погоды и красивой визуализацией",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      tech: ["React", "Chart.js", "API"],
      demo: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Персональный сайт-портфолио с анимациями и адаптивным дизайном",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Мои проекты
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Подборка лучших работ, которые демонстрируют мои навыки и
            креативность
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/10 border-white/20 backdrop-blur-sm overflow-hidden card-hover group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    >
                      <Icon name="ExternalLink" size={16} />
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10"
                    >
                      <Icon name="Github" size={16} />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white text-sm rounded-full border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full"
          >
            <Icon name="Github" size={20} />
            Посмотреть все проекты на GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
