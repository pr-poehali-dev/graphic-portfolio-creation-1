import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Креативная графика",
      category: "Цифровое искусство",
      image: "/img/3e7d069d-076a-4011-84f4-5154020a2558.jpg",
      description: "Современные геометрические композиции с яркими акцентами"
    },
    {
      id: 2,
      title: "Веб-дизайн интерфейсов",
      category: "UX/UI Design",
      image: "/img/a82e832b-9cf8-499c-a6f0-49fa35103006.jpg",
      description: "Чистые и функциональные интерфейсы для веб-приложений"
    },
    {
      id: 3,
      title: "Брендинг и айдентика",
      category: "Корпоративный дизайн",
      image: "/img/dc234aca-a554-45f6-adcd-0ff31a4f6903.jpg",
      description: "Полный цикл создания фирменного стиля и логотипов"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-montserrat text-2xl font-bold text-gray-800">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="font-open-sans text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="#portfolio" className="font-open-sans text-gray-600 hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="font-open-sans text-gray-600 hover:text-primary transition-colors">Обо мне</a>
              <a href="#contact" className="font-open-sans text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="outline" size="icon" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  Графический дизайнер
                </div>
                <h1 className="font-montserrat text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
                  Создаю
                  <br />
                  <span className="text-primary">Визуальные</span>
                  <br />
                  Решения
                </h1>
                <p className="font-open-sans text-xl text-gray-600 max-w-lg">
                  Превращаю идеи в яркие дизайн-решения. Специализируюсь на брендинге, веб-дизайне и цифровом искусстве.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-open-sans text-lg px-8 py-4 h-auto">
                  Смотреть работы
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="font-open-sans text-lg px-8 py-4 h-auto">
                  Связаться
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-gray-100">
                <img
                  src="/img/3e7d069d-076a-4011-84f4-5154020a2558.jpg"
                  alt="Creative Design"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-2xl opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-800 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Мои Работы
            </h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto">
              Подборка лучших проектов в области графического дизайна и брендинга
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={item.id}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <span className="inline-block px-3 py-1 bg-primary rounded-full text-sm font-medium mb-2">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="font-open-sans text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto font-open-sans text-primary hover:text-primary/80">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="relative">
                <div className="w-full h-[500px] rounded-3xl bg-gradient-to-br from-primary/10 to-gray-200 overflow-hidden">
                  <img
                    src="/img/a82e832b-9cf8-499c-a6f0-49fa35103006.jpg"
                    alt="About Me"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-3xl opacity-20"></div>
              </div>
            </div>
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Обо мне
              </div>
              <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-gray-900">
                Привет! Я Анна
              </h2>
              <p className="font-open-sans text-lg text-gray-600 leading-relaxed">
                Графический дизайнер с 5+ лет опыта в создании визуальных решений для брендов. 
                Специализируюсь на корпоративном дизайне, веб-интерфейсах и цифровом искусстве.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Palette" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-900">Креативность</h4>
                    <p className="font-open-sans text-gray-600">Нестандартные решения для любых задач</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Target" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-900">Результат</h4>
                    <p className="font-open-sans text-gray-600">Фокус на достижении бизнес-целей</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-gray-900">Скорость</h4>
                    <p className="font-open-sans text-gray-600">Быстрая реализация проектов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Давайте Работать
            </h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto">
              Готова обсудить ваш проект и создать что-то удивительное вместе
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-gray-900">Email</h4>
                      <p className="font-open-sans text-gray-600">hello@designer.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-gray-900">Телефон</h4>
                      <p className="font-open-sans text-gray-600">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-montserrat font-semibold text-gray-900">Локация</h4>
                      <p className="font-open-sans text-gray-600">Москва, Россия</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-4">Социальные сети</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="w-12 h-12">
                      <Icon name="Instagram" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="w-12 h-12">
                      <Icon name="Twitter" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="w-12 h-12">
                      <Icon name="Linkedin" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="w-12 h-12">
                      <Icon name="Github" size={20} />
                    </Button>
                  </div>
                </div>
              </div>

              <Card className="p-8 shadow-lg animate-fade-in">
                <CardContent className="space-y-6 p-0">
                  <h3 className="font-montserrat text-2xl font-semibold text-gray-900">
                    Отправить сообщение
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="font-open-sans text-sm font-medium text-gray-700 mb-2 block">
                        Имя
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-open-sans"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="font-open-sans text-sm font-medium text-gray-700 mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-open-sans"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="font-open-sans text-sm font-medium text-gray-700 mb-2 block">
                        Сообщение
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-open-sans resize-none"
                        placeholder="Расскажите о вашем проекте..."
                      />
                    </div>
                    <Button size="lg" className="w-full font-open-sans text-lg py-3 h-auto">
                      Отправить сообщение
                      <Icon name="Send" size={20} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="font-montserrat text-2xl font-bold mb-4">Portfolio</div>
            <p className="font-open-sans text-gray-400 mb-8">
              © 2024 Анна Дизайнер. Все права защищены.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="font-open-sans text-gray-400 hover:text-white transition-colors">
                Главная
              </a>
              <a href="#" className="font-open-sans text-gray-400 hover:text-white transition-colors">
                Портфолио
              </a>
              <a href="#" className="font-open-sans text-gray-400 hover:text-white transition-colors">
                Обо мне
              </a>
              <a href="#" className="font-open-sans text-gray-400 hover:text-white transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;