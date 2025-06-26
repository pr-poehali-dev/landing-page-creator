import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface LeadFormData {
  company: string;
  contact: string;
  phone: string;
  email: string;
  source: string;
  notes: string;
}

const AddLeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>();

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    // Имитация отправки данных
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Новый лид:", data);
    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
          <Icon name="UserPlus" className="text-white" size={20} />
        </div>
        <h2 className="text-2xl font-rubik font-bold text-gray-900">
          Добавить нового лида
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="font-rubik">Информация о лиде</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Название компании</Label>
                    <Input
                      id="company"
                      {...register("company", {
                        required: "Обязательное поле",
                      })}
                      placeholder="ООО 'Название компании'"
                    />
                    {errors.company && (
                      <p className="text-sm text-red-600">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact">Контактное лицо</Label>
                    <Input
                      id="contact"
                      {...register("contact", {
                        required: "Обязательное поле",
                      })}
                      placeholder="Иванов Иван Иванович"
                    />
                    {errors.contact && (
                      <p className="text-sm text-red-600">
                        {errors.contact.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      {...register("phone", { required: "Обязательное поле" })}
                      placeholder="+7 (495) 123-45-67"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { required: "Обязательное поле" })}
                      placeholder="info@company.ru"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="source">Источник лида</Label>
                  <select
                    id="source"
                    {...register("source", { required: "Обязательное поле" })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Выберите источник</option>
                    <option value="website">Сайт</option>
                    <option value="phone">Телефонный звонок</option>
                    <option value="email">Email</option>
                    <option value="social">Социальные сети</option>
                    <option value="referral">Рекомендация</option>
                    <option value="exhibition">Выставка</option>
                  </select>
                  {errors.source && (
                    <p className="text-sm text-red-600">
                      {errors.source.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Дополнительная информация</Label>
                  <textarea
                    id="notes"
                    {...register("notes")}
                    placeholder="Примечания, интересы клиента, важные детали..."
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    rows={4}
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600"
                  >
                    {isSubmitting ? (
                      <>
                        <Icon
                          name="Loader2"
                          className="animate-spin"
                          size={18}
                        />
                        Сохраняем...
                      </>
                    ) : (
                      <>
                        <Icon name="Save" size={18} />
                        Сохранить лида
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => reset()}
                  >
                    Очистить
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-rubik text-lg">
                Быстрые действия
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Phone" size={18} />
                Позвонить
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Mail" size={18} />
                Отправить email
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Calendar" size={18} />
                Запланировать встречу
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="FileText" size={18} />
                Создать задачу
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-rubik text-lg">Статистика</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Лидов сегодня</span>
                <span className="font-bold text-primary-600">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">За неделю</span>
                <span className="font-bold text-primary-600">47</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Конверсия</span>
                <span className="font-bold text-green-600">24%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddLeadForm;
