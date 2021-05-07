type Props = {
  trending: {
    title: string;
    desc?: string;
    increaseStar: number;
    href: string;
  };
};

export const Trending = ({ trending }: Props) => {
  return (
    <li
      className="text-gray-200 h-12 border-b flex items-center px-4 justify-between"
      key={trending.title}
    >
      <div className="flex items-center gap-2">
        <span className="text-blue-500 font-bold">
          <a target="_blamk" rel="noopener" href={trending.href}>
            {trending.title}
          </a>
        </span>
        <span className="text-xs">{trending.desc}</span>
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <span>⭐️</span>
          <span>{trending.increaseStar}</span>
        </div>
      </div>
    </li>
  );
};
