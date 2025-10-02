# Discord RPC для VSCode 🚀

Кастомная интеграция Discord Rich Presence для Visual Studio Code, которая показывает чем ты кодишь в реальном времени.

## ✨ Возможности

- ⏱️ **Отслеживание времени** - Видно сколько времени работаешь над проектом
- 🔮 **Автоопределение языка** - Умное переключение иконок
- 📄 **Чистый вид файлов** - Только имена, без путей
- 🎭 **Приватный режим** - Скрывает детали когда нужно
- ⚡ **Лёгкий** - Минимальное влияние на производительность

## 🚀 Установка

### Быстрая установка
1. Скачай последний `.vsix` из [Релизов](https://github.com/0keycode/custom-discord-rpc)
2. В VSCode: `Ctrl+Shift+X` → `...` → `Install from VSIX`
3. Выбери скачанный файл
4. Перезапусти VSCode

### Настройка Discord
1. Создай приложение в [Discord Developer Portal](https://discord.com/developers/applications)
2. Скопируй **Application ID**
3. В `extension.js` замени:
   ```javascript
   const clientId = "ТВОЙ_APP_ID";
   ```
4. Загрузи иконки в **Rich Presence → Art Assets**:
   - Обязательные: `vscode`, `lock_icon`, `text`
   - Языки: `python_icon`, `javascript_icon`, `typescript_icon` и т.д.

## ⚙️ Настройки

Открой настройки (`Ctrl+,`) и найди "Discord RPC":

| Настройка | Описание | По умолчанию |
|-----------|----------|--------------|
| `Анонимный режим` | Скрывает имена файлов и проектов | `false` |

## 🗃️ Поддерживаемые языки

- **Python, JavaScript, TypeScript, Java, C++**
- **HTML, CSS, Rust, Go, JSON**
- **Markdown, YAML, XML, Текстовые файлы**

## 🛠️ Сборка из исходников

```bash
# Клонируй репозиторий
git clone https://github.com/0keycode/custom-discord-rpc
cd custom-discord-rpc

# Установи зависимости
npm install

# Установи сборщик
npm install -g @vscode/vsce

# Собери расширение
vsce package

# Установи локально
code --install-extension *.vsix
```

## ❗ Решение проблем

**Статус не появляется?**
- Убедись что Discord запущен
- Проверь что Application ID совпадает
- Открой консоль: `Help → Toggle Developer Tools`

**Иконки не грузятся?**
- Подожди 1-2 часа для кеша Discord
- Убедись что названия картинок совпадают точно

**Расширение не работает?**
- Перезапусти и VSCode и Discord
- Проверь настройки расширения

## 🎯 Использование

Просто установи и начинай кодить! Расширение автоматически:
- Определит твой текущий проект
- Покажет текущий файл
- Отобразит иконку языка программирования
- Будет отслеживать время в проекте

## 🏗️ Разработка

Для отладки нажми `F5` в VSCode - откроется окно для разработки расширений.

## 📦 Структура проекта

```
custom-discord-rpc/
├──.vscode/
├────/launch.json
├── extension.js          # Основной код
├── package.json          # Манифест расширения
├── node_modules/         # Зависимости
└── README.md            # Этот файл
```

## 🤝 Участие в разработке

1. Форкни проект
2. Создай ветку для фичи (`git checkout -b feature/amazing-feature`)
3. Закоммить изменения (`git commit -m 'Add some amazing feature'`)
4. Запушь ветку (`git push origin feature/amazing-feature`)
5. Открой Pull Request

## 📄 Лицензия

MIT © 2025 okey

---
