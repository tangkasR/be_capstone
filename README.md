# Install package
npm install

# Create file .env<br>
DATABASE_URL = "mysql://user:password@localhost:3306/mydatabase" <br>
(user = username phpmyadmin | password = password phpmyadmin | 3306 = post phpmyadmin | mydatabase = name of database in phpmyadmin) <br>
APP_PORT = (port to running server) <br>
JWT_SECRET = (jwt secret to create secret token)<br>

# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Start the server
npm run serve
