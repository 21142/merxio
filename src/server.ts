/* eslint-disable @typescript-eslint/require-await */
import express from "express";
import { nextApp, nextHandler } from "./next-utils";
import { getPayloadClient } from "./payload";

const app = express();
export const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin dashboard is running at ${cms.getAdminURL()}`);
      },
    },
  });

  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    payload.logger.info(`Next.js app is running`);

    app.listen(PORT, async () => {
      payload.logger.info(
        `Next.js app URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`,
      );
    });
  });
};

start();
