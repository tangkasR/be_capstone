<p style="font-size: 16px; font-weight: bold;">Install package<p>
npm install

<p style="font-size: 16px; font-weight: bold;">Create file .env:<p>
DATABASE_URL = "mysql://user:password@localhost:3306/mydatabase" <br>
(user = username phpmyadmin | password = password phpmyadmin | 3306 = post phpmyadmin | mydatabase = name of database in phpmyadmin) <br>
APP_PORT = (port to running server) <br>
JWT_SECRET = (jwt secret to create secret token)<br>

<p style="font-size: 16px; font-weight: bold;">Generate Prisma Client<p>
npx prisma generate

<p style="font-size: 16px; font-weight: bold;">Run migrations<p>
npx prisma migrate dev

<p style="font-size: 16px; font-weight: bold;">Start the server<p>
npm run serve
