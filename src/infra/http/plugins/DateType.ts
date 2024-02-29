import { t } from 'elysia';

export const DateType = t
	.Transform(t.String())
	.Decode(value => new Date(value))
	.Encode(value => value.toISOString());
