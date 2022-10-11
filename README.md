### Install dependencies & devdependencies

```bash
# install express and dotenv
npm i express dotenv 

# install typescript, @types/express, @types/node, concurrently, nodemon 
npm i -D typescript @types/express @types/node, concurrently, nodemon
```

### Create express server
```typescript
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

const app: Express = express();
const port  =  process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('typescript server run...')
}) 

app.listen(port, () => console.log(`app listen on ${port}`))

```
