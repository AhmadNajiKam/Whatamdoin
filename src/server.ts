import { Client } from "pg";
import app from "./app";
const client = new Client({
	user: "postgres",
	password: "whereami",
	host: "localhost",
	port: 5432,
	database: "whereami",
});
client.connect();
const values = [
	"0786296839",
	"ahmadnaji",
	"ahmadnajikam@gmail.com",
	"majican@14533",
	"busy",
];
await client.query("INSERT INTO users VALUES ($1,$2,$3,$4,$5)", values);

const res = await client.query("SELECT * FROM users");
console.log(res.rows);
const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`WhereAmI server is running on port ${port}`);
});
