import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ClientsTable = () => {
  const clients = [
    {
      id: 1,
      name: 'ООО "Прогресс"',
      contact: "Иванов И.И.",
      phone: "+7 (495) 123-45-67",
      email: "ivanov@progress.ru",
      status: "Активный",
      deal: "₽85,000",
    },
    {
      id: 2,
      name: "ИП Петров А.И.",
      contact: "Петров А.И.",
      phone: "+7 (495) 234-56-78",
      email: "petrov@mail.ru",
      status: "В работе",
      deal: "₽42,000",
    },
    {
      id: 3,
      name: 'ООО "Инновации"',
      contact: "Сидорова М.П.",
      phone: "+7 (495) 345-67-89",
      email: "info@innov.ru",
      status: "Активный",
      deal: "₽128,000",
    },
    {
      id: 4,
      name: 'ООО "Технологии"',
      contact: "Козлов В.А.",
      phone: "+7 (495) 456-78-90",
      email: "kozlov@tech.ru",
      status: "Потенциальный",
      deal: "₽65,000",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Активный":
        return "bg-green-100 text-green-800";
      case "В работе":
        return "bg-blue-100 text-blue-800";
      case "Потенциальный":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-rubik font-bold text-gray-900">Клиенты</h2>
        <Button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600">
          <Icon name="UserPlus" size={18} />
          Добавить клиента
        </Button>
      </div>

      <Card className="card-hover">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-rubik">База клиентов</CardTitle>
            <div className="relative w-80">
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Input placeholder="Поиск по клиентам..." className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Компания
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Контактное лицо
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Телефон
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Email
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Статус
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Сумма
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr
                    key={client.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">
                        {client.name}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-700">
                      {client.contact}
                    </td>
                    <td className="py-4 px-4 text-gray-700">{client.phone}</td>
                    <td className="py-4 px-4 text-gray-700">{client.email}</td>
                    <td className="py-4 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(client.status)}`}
                      >
                        {client.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-medium text-gray-900">
                      {client.deal}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Icon name="Edit2" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Phone" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Mail" size={16} />
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

export default ClientsTable;
