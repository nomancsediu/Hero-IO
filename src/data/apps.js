const apps = [
  {
    id: 1,
    title: "Forest: Focus for Productivity",
    companyName: "Seekrtech",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/168px-Spotify_logo_without_text.svg.png",
    description: "Forest is a unique productivity app that helps you stay focused by growing a virtual tree whenever you resist the urge to use your phone. Set a timer, plant a tree, and watch it grow as you focus. If you leave the app, your tree dies. Over time, you build a beautiful virtual forest that reflects your dedication. Forest also partners with real tree-planting organizations, so your focus contributes to reforestation efforts worldwide. It's the perfect blend of gamification and mindfulness for students, professionals, and anyone looking to build better focus habits.",
    size: 28.5,
    reviews: 4200000,
    ratingAvg: 4.5,
    downloads: 1000000000,
    ratings: [
      { name: "1 star", count: 120000 },
      { name: "2 star", count: 80000 },
      { name: "3 star", count: 200000 },
      { name: "4 star", count: 800000 },
      { name: "5 star", count: 3000000 }
    ]
  },
  {
    id: 2,
    title: "SmPlan: ToDo List with Reminder",
    companyName: "Simple Planning Inc.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/120px-WhatsApp.svg.png",
    description: "SmPlan is a simple yet powerful to-do list app designed to help you plan your day, set reminders, and stay on top of your tasks. Organize your tasks into categories, set due dates, and receive timely notifications so nothing slips through the cracks. SmPlan features a clean, distraction-free interface that makes task management effortless for everyone. Whether you're managing personal errands or work projects, SmPlan keeps you organized and productive. With recurring reminders, priority flags, and progress tracking, SmPlan is the ultimate daily planning companion for busy individuals.",
    size: 35.2,
    reviews: 8500000,
    ratingAvg: 4.3,
    downloads: 5000000000,
    ratings: [
      { name: "1 star", count: 300000 },
      { name: "2 star", count: 150000 },
      { name: "3 star", count: 500000 },
      { name: "4 star", count: 2000000 },
      { name: "5 star", count: 5550000 }
    ]
  },
  {
    id: 3,
    title: "FLIP - Focus Timer for Study",
    companyName: "UIDesignLab",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/120px-Instagram_icon.png",
    description: "FLIP is an innovative focus timer app that encourages you to put your phone face down while studying or working. When you flip your phone over, the timer starts and your focus session begins. Pick up your phone and the session ends. FLIP tracks your study time, shows detailed statistics, and lets you compete with friends on leaderboards. With soothing background sounds, customizable goals, and streak tracking, FLIP turns disciplined study sessions into a rewarding daily habit for students and professionals alike.",
    size: 42.1,
    reviews: 12000000,
    ratingAvg: 4.1,
    downloads: 3000000000,
    ratings: [
      { name: "1 star", count: 600000 },
      { name: "2 star", count: 400000 },
      { name: "3 star", count: 1000000 },
      { name: "4 star", count: 3000000 },
      { name: "5 star", count: 7000000 }
    ]
  },
  {
    id: 4,
    title: "Notion - Notes & Docs",
    companyName: "Notion Labs Inc.",
    description: "Notion is an all-in-one workspace that combines notes, docs, databases, kanban boards, and wikis into a single powerful app. Whether you're writing meeting notes, managing a project, or building a personal knowledge base, Notion adapts to your workflow. Its flexible block-based editor lets you structure content exactly how you want. Teams can collaborate in real time, leave comments, and share pages instantly. With thousands of community templates and deep integrations, Notion has become the go-to productivity tool for individuals, startups, and enterprises worldwide.",
    size: 55.8,
    reviews: 20000000,
    ratingAvg: 4.4,
    downloads: 8000000000,
    ratings: [
      { name: "1 star", count: 500000 },
      { name: "2 star", count: 300000 },
      { name: "3 star", count: 1200000 },
      { name: "4 star", count: 5000000 },
      { name: "5 star", count: 13000000 }
    ]
  },
  {
    id: 5,
    title: "Headspace: Sleep & Meditation",
    companyName: "Headspace Inc.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/120px-TikTok_logo.svg.png",
    description: "Headspace is a leading meditation and mindfulness app designed to help you stress less, sleep better, and live more fully. With hundreds of guided meditations, sleep sounds, breathing exercises, and focus music, Headspace makes mental wellness accessible for everyone. The app offers structured courses for beginners and advanced practitioners alike, covering topics like anxiety, relationships, and productivity. Daily reminders and streak tracking keep your mindfulness practice consistent. Trusted by millions worldwide, Headspace is your personal guide to a calmer, happier, and more focused mind every single day.",
    size: 61.3,
    reviews: 15000000,
    ratingAvg: 4.2,
    downloads: 3500000000,
    ratings: [
      { name: "1 star", count: 700000 },
      { name: "2 star", count: 400000 },
      { name: "3 star", count: 1300000 },
      { name: "4 star", count: 4000000 },
      { name: "5 star", count: 8600000 }
    ]
  },
  {
    id: 6,
    title: "Todoist: To-Do List & Planner",
    companyName: "Doist Inc.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/120px-Netflix_2015_logo.svg.png",
    description: "Todoist is one of the world's most popular task management apps, trusted by millions to organize work and personal life. Create tasks, set due dates, assign priorities, and break projects into subtasks with ease. Todoist's natural language input lets you add tasks quickly by typing phrases like 'every Monday at 9am'. Collaborate with teammates by sharing projects and assigning tasks. With integrations for Gmail, Slack, Google Calendar, and more, Todoist fits seamlessly into your existing workflow. Its clean design and powerful features make it the ultimate planner for getting things done.",
    size: 78.4,
    reviews: 9000000,
    ratingAvg: 4.6,
    downloads: 1500000000,
    ratings: [
      { name: "1 star", count: 100000 },
      { name: "2 star", count: 80000 },
      { name: "3 star", count: 320000 },
      { name: "4 star", count: 2000000 },
      { name: "5 star", count: 6500000 }
    ]
  },
  {
    id: 7,
    title: "Habitica: Gamify Your Tasks",
    companyName: "HabitRPG Inc.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/120px-Telegram_logo.svg.png",
    description: "Habitica turns your real-life tasks and habits into a fun role-playing game. Create your character, build daily habits, complete to-do lists, and earn experience points, gold, and gear as rewards. Failing your habits causes your character to lose health, making productivity feel genuinely urgent and exciting. Join parties with friends to tackle quests together and hold each other accountable. With a vibrant community, customizable avatars, and hundreds of in-game rewards, Habitica is the most entertaining way to build positive habits and crush your goals every single day.",
    size: 22.7,
    reviews: 5000000,
    ratingAvg: 4.7,
    downloads: 900000000,
    ratings: [
      { name: "1 star", count: 50000 },
      { name: "2 star", count: 30000 },
      { name: "3 star", count: 120000 },
      { name: "4 star", count: 800000 },
      { name: "5 star", count: 4000000 }
    ]
  },
  {
    id: 8,
    title: "Calm - Sleep & Meditation",
    companyName: "Calm.com Inc.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Snapchat_logo.svg/120px-Snapchat_logo.svg.png",
    description: "Calm is the number one app for sleep, meditation, and relaxation, helping millions of people reduce anxiety and sleep better. Explore hundreds of guided meditations, sleep stories narrated by soothing voices, breathing programs, and relaxing music. Calm's Sleep Stories are designed to help adults drift off peacefully, featuring calming narratives and nature soundscapes. Daily mindfulness sessions fit into even the busiest schedules. With programs for stress, focus, relationships, and personal growth, Calm is your complete mental wellness toolkit for a healthier, more balanced life.",
    size: 48.9,
    reviews: 7000000,
    ratingAvg: 3.9,
    downloads: 2000000000,
    ratings: [
      { name: "1 star", count: 800000 },
      { name: "2 star", count: 500000 },
      { name: "3 star", count: 1200000 },
      { name: "4 star", count: 2000000 },
      { name: "5 star", count: 2500000 }
    ]
  },
  {
    id: 9,
    title: "Any.do: To-Do List & Calendar",
    companyName: "Any.do Inc.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/120px-Uber_logo_2018.svg.png",
    description: "Any.do is a beautifully designed to-do list and calendar app that helps you manage tasks, plan your day, and never miss an important event. Seamlessly combine your tasks and calendar in one unified view so you always know what's coming up. Any.do's smart daily planner suggests the best time to tackle your tasks based on your schedule. Share lists and assign tasks to family or teammates for effortless collaboration. With reminders, recurring tasks, and integrations with Google Calendar and WhatsApp, Any.do is the all-in-one organizer for a more productive and stress-free life.",
    size: 33.6,
    reviews: 6000000,
    ratingAvg: 4.0,
    downloads: 750000000,
    ratings: [
      { name: "1 star", count: 400000 },
      { name: "2 star", count: 250000 },
      { name: "3 star", count: 750000 },
      { name: "4 star", count: 1600000 },
      { name: "5 star", count: 3000000 }
    ]
  },
  {
    id: 10,
    title: "Trello - Organize Anything",
    companyName: "Atlassian Inc.",
    description: "Trello is a visual project management tool that uses boards, lists, and cards to help individuals and teams organize any kind of work. Drag and drop cards across lists to track progress from idea to completion. Add due dates, attachments, checklists, labels, and comments to keep every detail in one place. Trello's Power-Ups connect your boards with tools like Slack, Google Drive, and Jira for a seamless workflow. Whether you're planning a product launch, managing a team sprint, or organizing a personal project, Trello's intuitive interface makes collaboration simple and visual for everyone.",
    size: 19.2,
    reviews: 11000000,
    ratingAvg: 4.5,
    downloads: 10000000000,
    ratings: [
      { name: "1 star", count: 200000 },
      { name: "2 star", count: 150000 },
      { name: "3 star", count: 650000 },
      { name: "4 star", count: 3000000 },
      { name: "5 star", count: 7000000 }
    ]
  },
  {
    id: 11,
    title: "TickTick: To-Do List & Tasks",
    companyName: "Appest Inc.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Zoom_Communications_Logo.svg/120px-Zoom_Communications_Logo.svg.png",
    description: "TickTick is a powerful to-do list and task management app that helps you capture ideas, organize tasks, and achieve your goals. Create tasks with due dates, reminders, and priority levels in seconds. TickTick's built-in Pomodoro timer helps you stay focused during work sessions, while habit tracking keeps your daily routines on course. Collaborate with teammates by sharing lists and assigning tasks. With a smart calendar view, five-day weather forecast, and seamless sync across all devices, TickTick is the all-in-one productivity app for people who want to get more done with less stress.",
    size: 44.5,
    reviews: 4500000,
    ratingAvg: 4.3,
    downloads: 500000000,
    ratings: [
      { name: "1 star", count: 150000 },
      { name: "2 star", count: 100000 },
      { name: "3 star", count: 350000 },
      { name: "4 star", count: 1200000 },
      { name: "5 star", count: 2700000 }
    ]
  },
  {
    id: 12,
    title: "Focus To-Do: Pomodoro Timer",
    companyName: "SuperElement Soft",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/120px-Discord_logo.svg.png",
    description: "Focus To-Do combines the proven Pomodoro technique with a full-featured task manager to help you work smarter and accomplish more. Break your work into focused 25-minute sessions separated by short breaks to maximize concentration and reduce mental fatigue. Add tasks, set deadlines, and track how many Pomodoros each task takes to complete. Detailed statistics show your daily and weekly focus trends so you can continuously improve. With white noise options, customizable timer lengths, and cross-device sync, Focus To-Do is the ultimate tool for deep work and distraction-free productivity.",
    size: 38.1,
    reviews: 3800000,
    ratingAvg: 4.4,
    downloads: 400000000,
    ratings: [
      { name: "1 star", count: 80000 },
      { name: "2 star", count: 60000 },
      { name: "3 star", count: 260000 },
      { name: "4 star", count: 1000000 },
      { name: "5 star", count: 2400000 }
    ]
  },
  {
    id: 13,
    title: "Structured - Daily Planner",
    companyName: "Structured App GmbH",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Duolingo_logo.svg/120px-Duolingo_logo.svg.png",
    description: "Structured is a beautiful visual daily planner that lays out your entire day on a clean timeline so you always know what's next. Add tasks, appointments, and routines with durations and watch your day take shape at a glance. Unlike traditional to-do lists, Structured shows you exactly when things happen and how much time you have between them. Color-coded blocks, icons, and reminders make planning intuitive and enjoyable. Whether you're a student managing classes or a professional juggling meetings, Structured helps you design a balanced, productive day every morning.",
    size: 26.3,
    reviews: 7500000,
    ratingAvg: 4.6,
    downloads: 600000000,
    ratings: [
      { name: "1 star", count: 100000 },
      { name: "2 star", count: 75000 },
      { name: "3 star", count: 325000 },
      { name: "4 star", count: 2000000 },
      { name: "5 star", count: 5000000 }
    ]
  },
  {
    id: 14,
    title: "BeReal - Your Friends for Real",
    companyName: "BeReal SAS",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Canva_Logo.png/120px-Canva_Logo.png",
    description: "BeReal is a refreshingly authentic social media app that challenges the highlight-reel culture of traditional platforms. Once a day, at a random time, BeReal sends a notification giving you 2 minutes to capture a simultaneous front and back camera photo — no filters, no retakes. Share your real, unedited moment with close friends and see theirs in return. BeReal's simplicity and spontaneity create genuine connections based on real life rather than curated perfection. With RealMojis, friend reactions, and a memories archive, BeReal is redefining social sharing for a generation tired of fake online personas.",
    size: 52.7,
    reviews: 5500000,
    ratingAvg: 4.8,
    downloads: 450000000,
    ratings: [
      { name: "1 star", count: 30000 },
      { name: "2 star", count: 20000 },
      { name: "3 star", count: 150000 },
      { name: "4 star", count: 1300000 },
      { name: "5 star", count: 4000000 }
    ]
  },
  {
    id: 15,
    title: "Finch: Self Care Pet",
    companyName: "Finch Care Inc.",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Shazam_icon.svg/120px-Shazam_icon.svg.png",
    description: "Finch is a self-care app that lets you nurture a cute virtual bird while taking care of your own mental health. Set personal goals, complete daily self-care check-ins, and earn energy to help your Finch grow and go on adventures. The app gently encourages you to reflect on your emotions, practice gratitude, and build healthy routines without pressure or judgment. Finch's warm, cozy design and compassionate approach make mental wellness feel approachable and even fun. Whether you're managing anxiety, building confidence, or simply practicing daily self-care, Finch is your tiny feathered companion on the journey to feeling better.",
    size: 15.4,
    reviews: 2800000,
    ratingAvg: 4.7,
    downloads: 300000000,
    ratings: [
      { name: "1 star", count: 20000 },
      { name: "2 star", count: 15000 },
      { name: "3 star", count: 65000 },
      { name: "4 star", count: 700000 },
      { name: "5 star", count: 2000000 }
    ]
  }
];

export default apps;
