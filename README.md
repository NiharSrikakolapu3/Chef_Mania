# Chef Mania

Website Link: ____

---

## Overview
Chef Mania is a sophisticated full-stack board game that combines strategic gameplay with modern web technologies.  
Players engage in tactical battles using a card-based movement system while an intelligent AI opponent adapts to different difficulty levels.  
The game features real-time gameplay, comprehensive replay systems, and polished user interfaces designed for competitive strategic gaming.

---

## Game Mechanics

### Board Setup
- 5x5 grid with alternating tile colors  
- Player pieces: **1 Main Chef + 4 Assistant Cooks** (bottom row)  
- Computer pieces: **1 Main Chef + 4 Assistant Cooks** (top row)  
- Starting positions: Main Chefs in center, Assistants on sides  

### Card System
- Player hand: **2 cards** at any time  
- Computer hand: **2 cards** at any time  
- Center card: **1 shared card** that rotates after each move  
- Card exchange: Used card → center, center card → player/computer hand  

### Win Conditions
- **Capture Victory** – Eliminate opponent's Main Chef  
- **Throne Victory** – Move your Main Chef to opponent's starting throne  

---

## Website Version

### Features
- **Card-Based Movement System** – 15 unique recipe cards with distinct movement patterns  
- **Multi-Level AI Opponents** – Easy, Normal, and Hard difficulty with advanced minimax algorithms  
- **Real-Time Game State Management** – Instant board updates and move validation  
- **Game Replay & History** – Review and analyze past games move-by-move  
- **User Authentication** – Firebase-powered login system with profile management  
- **Local Storage Integration** – Auto-save game progress and maintain session state  

---

## Tech Stack

### Frontend
- React – Modern component-based architecture with hooks  
- Vite – Fast development server and build tooling  
- Tailwind CSS – Utility-first responsive design framework  
- Framer Motion – Professional animations and transitions  
- React Router Dom – Client-side routing and navigation  
- Axios – HTTP client for API communication  
- Firebase Auth – User authentication and profile management  

### Backend
- Java – Modern Java with latest language features  
- Spring Boot – Production-ready application framework  
- Spring MVC – RESTful API architecture with proper HTTP handling  
- Jackson – JSON serialization and API data binding  
- Maven – Dependency management and build automation  

### Game Engine
- Minimax Algorithm – AI decision making with configurable depth limits  
- Alpha-Beta Pruning – Performance optimization for AI calculations  
- Heuristic Evaluation – Multiple evaluation functions for different AI personalities  
- Game State Deep Copying – Immutable state management for move simulation  
- Move Generation – Dynamic valid move calculation based on card patterns  

---

## Future Enhancements
- Online Multiplayer System  
- Enhanced User Authentication & Profiles  
