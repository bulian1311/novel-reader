// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await prisma.test.create({
      data: { title: "qwerty", content: "zxczxczxczxc" },
    });
    res.status(200).json({ name: "John Doe" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ name: "Err" });
  }
}
