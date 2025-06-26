import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Сообщение отправлено:", data);
    reset();
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: "Github", href: "#", label: "GitHub" },
    { icon: "Linkedin", href: "#", label: "LinkedIn" },
    { icon: "Twitter", href: "#", label: "Twitter" },
    { icon: "Mail", href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Связаться со мной
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Готов обсудить ваш проект или просто поболтать о технологиях
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Напишите мне
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Имя
                    </Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Обязательное поле" })}
                      placeholder="Ваше имя"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { required: "Обязательное поле" })}
                      placeholder="your@email.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">
                    Тема
                  </Label>
                  <Input
                    id="subject"
                    {...register("subject", { required: "Обязательное поле" })}
                    placeholder="Тема сообщения"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Сообщение
                  </Label>
                  <textarea
                    id="message"
                    {...register("message", { required: "Обязательное поле" })}
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    className="flex w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 hover-scale"
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" className="animate-spin" size={18} />
                      Отправляю...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={18} />
                      Отправить сообщение
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Контактная информация
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Icon name="MapPin" className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">Местоположение</p>
                      <p className="text-white/70">Москва, Россия</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Icon name="Mail" className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-white/70">hello@arseniy.dev</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Icon name="Phone" className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white font-medium">Телефон</p>
                      <p className="text-white/70">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Социальные сети
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 justify-start h-12"
                    >
                      <Icon name={link.icon as any} size={20} />
                      {link.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
