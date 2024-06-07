# install package
npm install

# create file .env:
DATABASE_URL = "mysql://user:password@localhost:3306/mydatabase"
(user = username phpmyadmin | password = password phpmyadmin | 3306 = post phpmyadmin | mydatabase = name of database in phpmyadmin)
APP_PORT = (port to running server)
JWT_SECRET = (jwt secret to create secret token)

# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Start the server
npm run serve
