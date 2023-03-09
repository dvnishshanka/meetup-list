import MeetupList from "./../components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "https://www.germany.travel/media/redaktion/content/bundeslaender/berlin/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities.jpg",
    title: "First meet up",
    address: "Berlin",
    description: "This is the first meet up",
  },
  {
    id: "m2",
    image:
      "https://www.germany.travel/media/redaktion/content/bundeslaender/berlin/Berlin_Brandenburger_Tor_im_Sonnenuntergang_Leitmotiv_German_Summer_Cities.jpg",
    title: "Second meet up",
    address: "Germany",
    description: "This is the second meet up",
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState();

  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
};
export default HomePage;
