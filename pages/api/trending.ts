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
      desc:
        "This repository is hoge hoge hugkaa settimeout functions hello world. ",
    },
    {
      title: "agumy/playground",
      increaseStar: 20,
      href: "https://github.com/agumy/playground",
      desc: "We should learn data structure and algorithm. ",
    },
    {
      title: "agumy/message-d",
      increaseStar: 30,
      href: "https://github.com/agumy/message-d",
      desc: "I want money. ",
    },
  ];

  res.status(200).json(mock);
};
