import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "Monitor",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 75 },
      ],
    },
    {
      title: "Backend",
      icon: "Server",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      title: "Tools & Others",
      icon: "Wrench",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Figma", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Навыки
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Технологии и инструменты, которыми я владею на профессиональном
            уровне
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white/10 border-white/20 backdrop-blur-sm card-hover"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Icon
                      name={category.icon as any}
                      className="text-white"
                      size={20}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white/90 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-white/70 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Сертификаты
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "React Developer Certification",
              "AWS Cloud Practitioner",
              "Google Analytics Certified",
            ].map((cert) => (
              <div
                key={cert}
                className="px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white backdrop-blur-sm hover-scale"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
