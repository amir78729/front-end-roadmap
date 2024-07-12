# Yoga Positions App

## Project Overview

This project is a yoga positions application designed for a junior front-end developer to implement using [React](https://reactjs.org/) and [Vite](https://vitejs.dev/). The application will display a list of yoga positions on the [home page](#home-page) and provide detailed information for each position on a separate [detail page](#detail-page). The project aims to provide a responsive, user-friendly interface that adheres to a given Figma design and includes a demo. Users can also add their favorite yoga poses to a list stored using the local storage API. The application will be a Progressive Web App ([PWA](https://en.wikipedia.org/wiki/Progressive_web_app)).

## Project Requirements

### Technical Stack
- **Frontend Framework:** React
- **Build Tool:** Vite
- **Components Library:** [Material-UI (MUI)](https://mui.com/) or [Mantine](https://mantine.dev/) (It's your choice!)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Data Fetching:** [React Query](https://react-query.tanstack.com/)
- **Sanitization:** [DOMPurify](https://github.com/cure53/DOMPurify)
- **Storage:** Local Storage API
- **PWA Support:** [Vite PWA Plugin](https://vite-plugin-pwa.netlify.app/)

### Data Structure
Each yoga position has the following structure:
```json
[
  {
    "id": 1,
    "sanskritName": "Navasana",
    "englishName": "Boat",
    "video": "https://www.youtube.com/watch?v=QVEINjrYUPU&list=PLtM0YoctczKa2-G6HoX-vSFViYiHFdWhC&index=33&pp=iAQB",
    "persianName": "حرکت قایق",
    "englishDescription": "...",
    "persianDescription": "...",
    "icon": "https://www.dropbox.com/s/4m64ztxkj8a4dab/boatstraightlegs.svg?raw=1"
  }
]
```

You can access the full data [here](https://raw.githubusercontent.com/amir78729/front-end-roadmap/main/projects/yoga-positions/sample-positions.json)

### Key Features

#### Home Page
- Display a list of yoga positions.
- Each position should display its English name, Persian name, and icon.

#### Detail Page
- Display detailed information about a selected yoga position.
- Include English and Persian names, a video embedded from YouTube, and sanitized descriptions in both English and Persian.

#### Navigation
- Use React Router DOM to navigate the home page and detail pages.

#### Responsiveness
- Ensure the app is responsive and works well on mobile and desktop devices.

#### Favorites
- Allow users to add yoga positions to their favorite list.
- Use the local storage API to save and retrieve favorite poses.

#### PWA
- Implement PWA features to enable the app to work offline and provide a native app-like experience.

  
> [!NOTE]
> Please use Git for implementing this project. This will help you learn to work with Git and GitHub and also make it easier for your mentor to track your progress and provide feedback.

## What You Will Learn at the End
By the end of this project, you will have gained practical experience in the following areas:
- React Development
- TypeScript
- Vite
- Using External Libraries
- Local Storage API
- PWA Implementation
- Version Control (git)

## Designs and Demo
[Figma]()
[Demo]()


## Resources
- [Yoga Pose Tutorials](https://www.youtube.com/playlist?list=PLtM0YoctczKa2-G6HoX-vSFViYiHFdWhC)
- [Atr-e Mehr Yoga](https://www.atremehr-yoga.com/%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%DB%8C%D9%88%DA%AF%D8%A7/%D8%A2%D8%B3%D8%A7%D9%86%D8%A7%D9%87%D8%A7%DB%8C-%DB%8C%D9%88%DA%AF%D8%A7)
