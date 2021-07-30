# grammY Vercel boilerplate

[grammY](https://grammy.dev/) boilerplate to develop and host telegram bots on [Vercel](https://vercel.com/).

## Features

-   Typescript support
-   Linting and formatting preconfigured
-   Development friendly environment with Nodemon

## Development

```bash
# Copy the .env example and change the BOT_TOKEN to match yours
$ cp .env.example .env
# Install the dependencies
$ npm install
# Run the development environment
$ npm run dev
```

## Deployment

#### Terminal

```bash
# Install vercel cli if you don't have it yet
$ npm i -g vercel
# Deploy the project
$ vercel --prod
```

#### Vercel

On your project's page, go to Settings > Environment Variables and add the following variables:

| Name          | Value                                     |
| ------------- | ----------------------------------------- |
| `BOT_TOKEN`   | _your bot token_                          |
| `SECRET_PATH` | _a random string, used to hide your path_ |

> You can also set the webhook URL manually accessing `https://api.telegram.org/bot<bot_token>/setWebhook?url=<webhook_url>` on your browser

Finally, you should see a "Hello, world!" from the bot when typing `/hello` in chat.

## Contributing

Pull requests are welcome. If you have any suggestions, you can also create an [issue](https://github.com/neumanf/grammy-vercel-boilerplate/issues).

## License

[MIT](https://choosealicense.com/licenses/mit/)
