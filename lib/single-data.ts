export type ItemProps = {
  id: number;
  title: string;
  img: string;
  desc: string;
  videoUrl: string;
};

export const items: ItemProps[] = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/18441518/pexels-photo-18441518/free-photo-of-luma-light-festival-in-queenstown-new-zealand.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus dolore earum quod quo cupiditate assumenda quam vero commodi rerum numquam odit quae adipisci veniam quis distinctio tenetur, aliquid praesentium?",
    videoUrl: "/piano.mp4",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/13488937/pexels-photo-13488937.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus dolore earum quod quo cupiditate assumenda quam vero commodi rerum numquam odit quae adipisci veniam quis distinctio tenetur, aliquid praesentium?",
    videoUrl: "/piano.mp4",
  },
  {
    id: 3,
    title: "Vanilla js App",
    img: "https://images.pexels.com/photos/18235303/pexels-photo-18235303/free-photo-of-autumn-s-reflection.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus dolore earum quod quo cupiditate assumenda quam vero commodi rerum numquam odit quae adipisci veniam quis distinctio tenetur, aliquid praesentium?",
    videoUrl: "/piano.mp4",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18693461/pexels-photo-18693461/free-photo-of-a-city-with-a-tower-and-a-clock-tower.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus dolore earum quod quo cupiditate assumenda quam vero commodi rerum numquam odit quae adipisci veniam quis distinctio tenetur, aliquid praesentium?",
    videoUrl: "/piano.mp4",
  },
];
