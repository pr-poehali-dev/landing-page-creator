import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  const salesData = [
    { month: "Янв", sales: 4500 },
    { month: "Фев", sales: 6200 },
    { month: "Мар", sales: 5800 },
    { month: "Апр", sales: 7200 },
    { month: "Май", sales: 8900 },
    { month: "Июн", sales: 9500 },
  ];

  const conversionData = [
    { name: "Новые лиды", value: 45, color: "#9b87f5" },
    { name: "В работе", value: 30, color: "#0EA5E9" },
    { name: "Закрыты", value: 25, color: "#8E9196" },
  ];

  const stats = [
    {
      title: "Общий доход",
      value: "₽2,450,000",
      change: "+12%",
      icon: "DollarSign",
      color: "bg-green-500",
    },
    {
      title: "Активные клиенты",
      value: "1,284",
      change: "+8%",
      icon: "Users",
      color: "bg-blue-500",
    },
    {
      title: "Конверсия",
      value: "24.8%",
      change: "+3%",
      icon: "TrendingUp",
      color: "bg-purple-500",
    },
    {
      title: "Средний чек",
      value: "₽18,200",
      change: "+5%",
      icon: "CreditCard",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-rubik font-bold text-gray-900">Дашборд</h2>
        <div className="text-sm text-gray-500">Обновлено 5 минут назад</div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 mt-1">{stat.change}</p>
                </div>
                <div
                  className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}
                >
                  <Icon
                    name={stat.icon as any}
                    className="text-white"
                    size={24}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="font-rubik">Динамика продаж</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#9b87f5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="font-rubik">Воронка продаж</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={conversionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {conversionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="font-rubik">Последняя активность</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                action: "Новый клиент добавлен",
                client: 'ООО "Прогресс"',
                time: "5 минут назад",
                icon: "UserPlus",
              },
              {
                action: "Сделка закрыта",
                client: "ИП Петров А.И.",
                time: "1 час назад",
                icon: "CheckCircle",
              },
              {
                action: "Встреча запланирована",
                client: 'ООО "Инновации"',
                time: "2 часа назад",
                icon: "Calendar",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Icon
                    name={activity.icon as any}
                    className="text-primary-600"
                    size={20}
                  />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.client}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
