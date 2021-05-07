import type { NextApiRequest, NextApiResponse } from "next";

type Trending = {
  title: string;
  desc?: string;
  increaseStar: number;
  href: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Trending[]>) => {
  const mock: Trending[] = [
    {
      title: "agumy/world",
      increaseStar: 30,
      href: "https://github.com/agumy/world",
    },
    {
      title: "agumy/playground",
      increaseStar: 20,
      href: "https://github.com/agumy/playground",
    },
    {
      title: "agumy/sandbox",
      increaseStar: 30,
      href: "https://github.com/agumy/sandbox",
    },
  ];

  res.status(200).json(mock);
};
