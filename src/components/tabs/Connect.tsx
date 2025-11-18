import { ConnectDetail } from '../ui/ConnectDetail';

const connects = [
  {
    item: 'X',
    link: 'https://x.com/Parthiv_21',
    username: '@parthiv_21',
  },
  {
    item: 'Linkedin',
    link: 'https://www.linkedin.com/in/parthiv-parmar-7aa38b224/',
    username: '@parthiv-parmar',
  },
  {
    item: 'Github',
    link: 'https://github.com/parthiv011',
    username: '@parthiv011',
  },
  {
    item: 'Leetcode',
    link: 'https://leetcode.com/u/parthiv_77/',
    username: '@parthiv_77',
  },
  {
    item: 'Email',
    link: 'mailto:parmarparthiv77@gmail.com',
    username: 'parmarparthiv77@gmail.com',
  },
];

export default function Connect() {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold">Connect #</h2>
      <div className="flex flex-col gap-2">
        {connects.map((connect, index) => (
          <ConnectDetail
            key={index}
            item={connect.item}
            link={connect.link}
            username={connect.username}
          />
        ))}
      </div>
    </div>
  );
}
