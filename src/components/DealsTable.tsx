import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const DealsTable = () => {
  const deals = [
    {
      id: 1,
      title: "Поставка оборудования",
      client: 'ООО "Прогресс"',
      stage: "Переговоры",
      amount: "₽85,000",
      probability: 75,
      date: "2024-07-15",
    },
    {
      id: 2,
      title: "Консультационные услуги",
      client: "ИП Петров А.И.",
      stage: "Предложение",
      amount: "₽42,000",
      probability: 50,
      date: "2024-07-20",
    },
    {
      id: 3,
      title: "Разработка ПО",
      client: 'ООО "Инновации"',
      stage: "Подписание",
      amount: "₽128,000",
      probability: 90,
      date: "2024-07-10",
    },
    {
      id: 4,
      title: "Техподдержка",
      client: 'ООО "Технологии"',
      stage: "Первый контакт",
      amount: "₽65,000",
      probability: 25,
      date: "2024-07-25",
    },
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Подписание":
        return "bg-green-100 text-green-800";
      case "Переговоры":
        return "bg-blue-100 text-blue-800";
      case "Предложение":
        return "bg-yellow-100 text-yellow-800";
      case "Первый контакт":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getProbabilityColor = (probability: number) => {
    if (probability >= 75) return "text-green-600";
    if (probability >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-rubik font-bold text-gray-900">Сделки</h2>
        <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600">
          <Icon name="Plus" size={18} />
          Новая сделка
        </Button>
      </div>

      {/* Pipeline Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { stage: "Первый контакт", count: 12, amount: "₽420,000" },
          { stage: "Предложение", count: 8, amount: "₽680,000" },
          { stage: "Переговоры", count: 5, amount: "₽920,000" },
          { stage: "Подписание", count: 3, amount: "₽540,000" },
        ].map((item, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-4">
              <h3 className="font-medium text-gray-700 text-sm">
                {item.stage}
              </h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {item.count}
              </p>
              <p className="text-sm text-gray-600">{item.amount}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="font-rubik">Активные сделки</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Название
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Клиент
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Этап
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Сумма
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Вероятность
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Дата закрытия
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody>
                {deals.map((deal) => (
                  <tr
                    key={deal.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">
                        {deal.title}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700">{deal.client}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStageColor(deal.stage)}`}
                      >
                        {deal.stage}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-900">
                      {deal.amount}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`font-medium ${getProbabilityColor(deal.probability)}`}
                      >
                        {deal.probability}%
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-700">{deal.date}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Icon name="Edit2" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Eye" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="MessageCircle" size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DealsTable;
