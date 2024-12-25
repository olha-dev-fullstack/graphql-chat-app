# Real time GraphQL chat application

Used NestJS, Prisma, GraphQL, Redis, Postgres, ReactJS, Apollo Client, Zustand, and the UI library Mantine to create a FullStack TypeScript Real-time Chat app.
Using Docker set up for local development.

### Here are the main features chat app:

**Authentication Flow**: This allows users to register, log in, and log out. Authentication will be managed by using JWT Tokens, stored as HttpOnly cookies, which is necessary for accessing protected mutations and queries.

**Profile Management**: Users can update their name and profile avatar.

**Chatrooms**: Users can create chatrooms and add members.

**Real-time Features**: Implemented real-time features using GraphQL subscriptions built on top of WebSockets. This enables users to receive messages instantly, see typing indicators, and more.

**Online User Tracking with Redis**: Using Redis to store live users in a chatroom. As users join or leaves, the list gets updated in real-time on the backend. Subscribed clients will instantly see these changes.

## How to run project locally

- Clone the repository:

```bash
git clone https://github.com/olha-dev-fullstack/graphql-chat-app.git
cd graphql-chat-app
```

- To start backend:

```bash
cd backend
docker compose up -d ## this starts local database
npm install
npm run start:dev
```

- To start frontend:

```bash
cd frontend
npm install
npm run dev
```
