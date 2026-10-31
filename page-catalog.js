/* ==========================================================
   WORLD FIND — PAGE CATALOG
   Permanent registry of platform pages.
   Version: 1.0.0
   ========================================================== */

(function () {
  "use strict";

  const WF = window.WORLD_FIND;

  if (!WF) {
    console.error("WORLD FIND Core must load before page-catalog.js");
    return;
  }

  const PAGE_CATALOG = [

    // ======================================================
    // 01. HOME
    // ======================================================

    ["home", [
      ["overview", "Главная"],
      ["explore", "Исследовать"],
      ["discover", "Открытия"],
      ["trending", "Популярное"],
      ["recent", "Недавнее"],
      ["recommended", "Рекомендации"],
      ["nearby", "Рядом со мной"],
      ["world", "Весь мир"],
      ["activity", "Активность"],
      ["updates", "Обновления"]
    ]],

    // ======================================================
    // 02. WORLD MAP
    // ======================================================

    ["map", [
      ["world", "Карта мира"],
      ["countries", "Страны"],
      ["regions", "Регионы"],
      ["cities", "Города"],
      ["districts", "Районы"],
      ["streets", "Улицы"],
      ["places", "Места"],
      ["organizations", "Организации"],
      ["nearby", "Объекты рядом"],
      ["routes", "Маршруты"],
      ["map-search", "Поиск на карте"],
      ["map-layers", "Слои карты"],
      ["saved-places", "Избранные места"],
      ["popular-places", "Популярные места"],
      ["new-places", "Новые места"],
      ["place-details", "Карточка места"],
      ["place-reviews", "Отзывы о местах"],
      ["place-photos", "Фотографии мест"],
      ["place-hours", "Часы работы"],
      ["place-contact", "Контакты места"]
    ]],

    // ======================================================
    // 03. MARKET
    // ======================================================

    ["market", [
      ["overview", "Главная рынка"],
      ["all-products", "Все товары"],
      ["categories", "Категории"],
      ["food", "Продукты"],
      ["electronics", "Электроника"],
      ["clothing", "Одежда"],
      ["home", "Для дома"],
      ["transport", "Транспорт"],
      ["equipment", "Оборудование"],
      ["materials", "Материалы"],
      ["agriculture", "Сельское хозяйство"],
      ["shops", "Магазины"],
      ["suppliers", "Поставщики"],
      ["wholesale", "Оптовые предложения"],
      ["retail", "Розничные предложения"],
      ["product-details", "Карточка товара"],
      ["product-search", "Поиск товаров"],
      ["product-filters", "Фильтры товаров"],
      ["product-comparison", "Сравнение товаров"],
      ["product-favorites", "Избранные товары"]
    ]],

    // ======================================================
    // 04. SERVICES
    // ======================================================

    ["services", [
      ["overview", "Главная услуг"],
      ["all-services", "Все услуги"],
      ["repair", "Ремонт"],
      ["construction", "Строительство"],
      ["transport", "Транспортные услуги"],
      ["cleaning", "Уборка"],
      ["design", "Дизайн"],
      ["programming", "Программирование"],
      ["marketing", "Маркетинг"],
      ["consulting", "Консультации"],
      ["education", "Образовательные услуги"],
      ["health-services", "Медицинские организации"],
      ["beauty", "Уход и красота"],
      ["specialists", "Специалисты"],
      ["companies", "Компании"],
      ["service-details", "Карточка услуги"],
      ["specialist-profile", "Профиль специалиста"],
      ["service-search", "Поиск услуг"],
      ["service-reviews", "Отзывы"],
      ["service-booking", "Запись на услугу"]
    ]],

    // ======================================================
    // 05. WORK
    // ======================================================

    ["work", [
      ["overview", "Главная работы"],
      ["all-jobs", "Все вакансии"],
      ["remote", "Удалённая работа"],
      ["local", "Работа рядом"],
      ["part-time", "Частичная занятость"],
      ["full-time", "Полная занятость"],
      ["freelance", "Фриланс"],
      ["projects", "Проекты"],
      ["tasks", "Задания"],
      ["temporary", "Временная работа"],
      ["employers", "Работодатели"],
      ["candidates", "Кандидаты"],
      ["applications", "Отклики"],
      ["saved-jobs", "Сохранённые вакансии"],
      ["job-details", "Карточка вакансии"],
      ["task-details", "Карточка задания"],
      ["job-search", "Поиск работы"],
      ["job-categories", "Категории работы"],
      ["my-work", "Моя работа"],
      ["work-history", "История работы"]
    ]],

    // ======================================================
    // 06. DELIVERY
    // ======================================================

    ["delivery", [
      ["overview", "Главная доставки"],
      ["create-order", "Создать доставку"],
      ["my-orders", "Мои доставки"],
      ["active-orders", "Активные доставки"],
      ["delivery-history", "История доставок"],
      ["couriers", "Курьеры"],
      ["courier-registration", "Регистрация курьера"],
      ["courier-profile", "Профиль курьера"],
      ["courier-verification", "Проверка курьера"],
      ["delivery-map", "Карта доставки"],
      ["delivery-status", "Статус доставки"],
      ["delivery-routes", "Маршруты доставки"],
      ["delivery-prices", "Стоимость доставки"],
      ["delivery-zones", "Зоны доставки"],
      ["delivery-partners", "Партнёры доставки"],
      ["delivery-settings", "Настройки доставки"],
      ["pickup-points", "Точки получения"],
      ["delivery-addresses", "Адреса доставки"],
      ["delivery-support", "Поддержка доставки"],
      ["delivery-rules", "Правила доставки"]
    ]],

    // ======================================================
    // 07. LEARN
    // ======================================================

    ["learn", [
      ["overview", "Главная обучения"],
      ["all-courses", "Все курсы"],
      ["languages", "Языки"],
      ["programming", "Программирование"],
      ["artificial-intelligence", "Искусственный интеллект"],
      ["business-learning", "Бизнес"],
      ["mathematics", "Математика"],
      ["science", "Наука"],
      ["professional-skills", "Профессиональные навыки"],
      ["teachers", "Преподаватели"],
      ["schools", "Школы"],
      ["universities", "Университеты"],
      ["course-details", "Карточка курса"],
      ["lessons", "Уроки"],
      ["learning-progress", "Мой прогресс"],
      ["certificates", "Сертификаты"],
      ["study-groups", "Учебные группы"],
      ["learning-search", "Поиск обучения"],
      ["saved-courses", "Избранные курсы"],
      ["learning-history", "История обучения"]
    ]],

    // ======================================================
    // 08. BUSINESS
    // ======================================================

    ["business", [
      ["overview", "Главная бизнеса"],
      ["business-directory", "Каталог бизнеса"],
      ["companies", "Компании"],
      ["partners", "Партнёры"],
      ["suppliers", "Поставщики"],
      ["manufacturers", "Производители"],
      ["investments", "Инвестиционные возможности"],
      ["partnership", "Партнёрство"],
      ["business-profile", "Профиль компании"],
      ["business-registration", "Регистрация бизнеса"],
      ["business-verification", "Проверка бизнеса"],
      ["business-products", "Товары компании"],
      ["business-services", "Услуги компании"],
      ["business-orders", "Заказы компании"],
      ["business-statistics", "Статистика"],
      ["business-tools", "Инструменты бизнеса"],
      ["business-search", "Поиск компаний"],
      ["business-reviews", "Отзывы о компании"],
      ["business-settings", "Настройки компании"],
      ["business-support", "Поддержка бизнеса"]
    ]],

    // ======================================================
    // 09. COMMUNITY
    // ======================================================

    ["community", [
      ["overview", "Главная сообщества"],
      ["discussions", "Обсуждения"],
      ["groups", "Группы"],
      ["local-community", "Местные сообщества"],
      ["global-community", "Мировое сообщество"],
      ["questions", "Вопросы"],
      ["answers", "Ответы"],
      ["events", "События"],
      ["announcements", "Объявления"],
      ["recommendations", "Рекомендации"],
      ["members", "Участники"],
      ["community-search", "Поиск сообщества"],
      ["my-groups", "Мои группы"],
      ["saved-discussions", "Сохранённые обсуждения"],
      ["community-rules", "Правила сообщества"]
    ]],

    // ======================================================
    // 10. AI CORE
    // ======================================================

    ["ai", [
      ["overview", "Главная AI Core"],
      ["assistant", "AI-помощник"],
      ["smart-search", "Умный поиск"],
      ["matching", "Система совпадений"],
      ["recommendations", "Рекомендации AI"],
      ["translation", "Перевод"],
      ["business-assistant", "Помощник бизнеса"],
      ["seller-assistant", "Помощник продавца"],
      ["buyer-assistant", "Помощник покупателя"],
      ["learning-assistant", "Помощник обучения"],
      ["work-assistant", "Помощник работы"],
      ["route-assistant", "Помощник маршрутов"],
      ["ai-history", "История AI"],
      ["ai-settings", "Настройки AI"],
      ["ai-feedback", "Обратная связь"]
    ]],

    // ======================================================
    // 11. MESSAGES
    // ======================================================

    ["messages", [
      ["inbox", "Входящие"],
      ["sent", "Отправленные"],
      ["chats", "Чаты"],
      ["contacts", "Контакты"],
      ["support-chat", "Поддержка"],
      ["business-chats", "Деловые чаты"],
      ["order-chats", "Чаты заказов"],
      ["message-search", "Поиск сообщений"],
      ["archived", "Архив"],
      ["message-settings", "Настройки сообщений"]
    ]],

    // ======================================================
    // 12. PROFILE
    // ======================================================

    ["profile", [
      ["overview", "Мой профиль"],
      ["personal-data", "Личные данные"],
      ["my-listings", "Мои объявления"],
      ["my-products", "Мои товары"],
      ["my-services", "Мои услуги"],
      ["my-jobs", "Мои вакансии"],
      ["my-favorites", "Избранное"],
      ["my-reviews", "Мои отзывы"],
      ["my-activity", "Моя активность"],
      ["my-reputation", "Репутация"],
      ["verification", "Подтверждение профиля"],
      ["account-history", "История аккаунта"],
      ["privacy", "Конфиденциальность"],
      ["profile-settings", "Настройки профиля"],
      ["delete-account", "Удаление аккаунта"]
    ]],

    // ======================================================
    // 13. SYSTEM
    // ======================================================

    ["system", [
      ["overview", "Центр системы"],
      ["settings", "Общие настройки"],
      ["language", "Язык"],
      ["location", "Местоположение"],
      ["notifications", "Уведомления"],
      ["security", "Безопасность"],
      ["devices", "Устройства"],
      ["permissions", "Разрешения"],
      ["accessibility", "Доступность"],
      ["help", "Помощь"],
      ["faq", "Частые вопросы"],
      ["legal", "Правовая информация"],
      ["terms", "Условия использования"],
      ["privacy-policy", "Политика конфиденциальности"],
      ["system-status", "Состояние системы"]
    ]]

  ];

  /* ----------------------------------------------------------
     BUILD THE PERMANENT PAGE REGISTRY
     ---------------------------------------------------------- */

  const pages = [];

  PAGE_CATALOG.forEach(([sectionId, sectionPages]) => {
    sectionPages.forEach(([slug, title]) => {
      const route = "/" + sectionId + "/" + slug;

      pages.push(Object.freeze({
        id: sectionId + "." + slug,
        section: sectionId,
        slug,
        title,
        route,
        status: "planned"
      }));
    });
  });

  const catalog = Object.freeze(pages);

  const api = {
    version: "1.0.0",

    all() {
      return catalog;
    },

    get(id) {
      return catalog.find(page => page.id === id) || null;
    },

    getByRoute(route) {
      return catalog.find(page => page.route === route) || null;
    },

    getSection(sectionId) {
      return catalog.filter(page => page.section === sectionId);
    },

    count() {
      return catalog.length;
    },

    sections() {
      return PAGE_CATALOG.map(([id, items]) => ({
        id,
        count: items.length
      }));
    }
  };

  WF.pages = Object.freeze(api);

  console.log(
    "WORLD FIND Page Catalog loaded:",
    api.count(),
    "registered pages"
  );

})();
