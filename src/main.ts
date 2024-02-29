import { app } from './infra/http';

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
	console.log(
		`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
	);
});
