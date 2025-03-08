FROM oven/bun:latest

WORKDIR /app

COPY . .

RUN bun install

EXPOSE 42069

CMD ["bun", "start"]