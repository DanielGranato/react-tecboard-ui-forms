import * as z from 'zod';

const usersSchema = z.object({
    name: z.string(),
    email: z.string().email(),
});



export default usersSchema;