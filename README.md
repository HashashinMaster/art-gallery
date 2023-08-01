# Art Gallery Website - MERN Stack

🎨 Welcome to Art Gallery - an interactive web application that allows you to create, customize, and animate paintings, generate AI voice documentaries for your artworks, and showcase them in a stunning 3D gallery using Three.js and GSAP for captivating animations!

## 🚀 Features

- **Create & Customize Paintings:** Express your artistic vision by creating and customizing paintings with various tools and options.

- **Animation:** Bring your artwork to life with animation features to add motion and creativity to your creations.

- **AI Voice Documentary:** Provide a description of your artwork, and the application will generate an AI voice documentary to narrate the story behind the piece.

- **Gallery Showcase:** Display your masterpieces in an elegant and dynamic gallery layout, enriched with captivating animations powered by GSAP.

## 🔧 Installation & Requirements

Before getting started, ensure you have the following installed on your system:

- Node.js (https://nodejs.org) (Version >= 12.x)
- MongoDB (https://www.mongodb.com) (Make sure it's running)

To set up the project, follow these steps:

1. Clone the repository to your local machine.

```bash
git clone https://github.com/HashashinMaster/art-gallery.git

cd art-gallery
```

2. Rename the `.env.example` file to `.env` and adjust the values accordingly.

```bash
mv .env.example .env
```

Open the `.env` file with a text editor and replace the placeholder values with your actual configuration. The default `.env` values are:

```plaintext
ELEVENLABS_API_KEY=YOUR_ELEVENLABS_API
MOD=DEV
PORT=8000
HOST=http://localhost:8080
DB_NAME=art_gallery
DB_HOST=mongodb://127.0.0.1:27017
```

Replace `YOUR_ELEVENLABS_API` with your actual ElevenLabs API key and modify other variables if necessary.

3. Install dependencies for both the server and client.

```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
```

## ⚙️ Development Setup

To run the project in development mode, ensure MongoDB is running, and follow these steps:

1. Run the server

```bash
npm run dev

# watch mode
npm run dev:watch
```

2. Run the client

```bash
npm run dev
```

The development server will start on `http://localhost:8080`, and the client will run on `http://localhost:3000`. Any changes you make to the client or server code will automatically trigger a reload.

## 🚀 Production Setup

To deploy the application in production, follow these steps:

1. Build the client and server.

```bash
# Build client
cd client
npm run build

# Build server
cd ../server
npm run build
```

2. Start the production server.

```bash
cd dist
npm start
```

The production server will start on `http://localhost:8080`, and your Art Gallery application will be accessible through that address.

Certainly! Here's the updated "Dependencies" section with different emojis for server and client dependencies:

## 📦 Dependencies:

### 🖥️ Server Dependencies:

- 📦 `@types/express`: ^4.17.17
- 📦 `@types/multer`: ^1.4.7
- 📦 `@types/node`: ^20.4.4
- 📦 `axios`: ^1.4.0
- 📦 `dotenv`: ^16.3.1
- 📦 `express`: ^4.18.2
- 📦 `mongoose`: ^7.4.1
- 📦 `multer`: ^1.4.5-lts.1
- 📦 `nodemon`: ^3.0.1
- 📦 `openai`: ^3.3.0
- 📦 `ts-node`: ^10.9.1
- 📦 `typescript`: ^5.1.6
- 📦 `uuid`: ^9.0.0

### 🎨 Client Dependencies:

- 📦 `@react-three/drei`: ^9.78.2
- 📦 `@react-three/fiber`: ^8.13.5
- 📦 `@types/three`: ^0.154.0
- 📦 `axios`: ^1.4.0
- 📦 `dotenv`: ^16.3.1
- 📦 `gsap`: ^3.12.2
- 📦 `react`: ^18.2.0
- 📦 `react-dom`: ^18.2.0
- 📦 `react-icons`: ^4.10.1
- 📦 `react-router-dom`: ^6.14.2
- 📦 `three`: ^0.154.0

### 🛠️ Dev Dependencies:

- 🛠️ `@types/react`: ^18.2.14
- 🛠️ `@types/react-dom`: ^18.2.6
- 🛠️ `@typescript-eslint/eslint-plugin`: ^5.61.0
- 🛠️ `@typescript-eslint/parser`: ^5.61.0
- 🛠️ `@vitejs/plugin-react`: ^4.0.1
- 🛠️ `autoprefixer`: ^10.4.14
- 🛠️ `daisyui`: ^3.2.1
- 🛠️ `eslint`: ^8.44.0
- 🛠️ `eslint-plugin-react-hooks`: ^4.6.0
- 🛠️ `eslint-plugin-react-refresh`: ^0.4.1
- 🛠️ `postcss`: ^8.4.26
- 🛠️ `tailwindcss`: ^3.3.3
- 🛠️ `typescript`: ^5.0.2
- 🛠️ `vite`: ^4.4.0

## 📄 License

This project is licensed under the [MIT License](LICENSE).

Happy painting and showcasing! 🎉
