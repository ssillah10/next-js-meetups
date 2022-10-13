import { createContext } from "react";

const MeetupContext = createContext({
  metups: [],
  getMeetup: (id) => {},
  addMeetup: (meetup) => {},
  printHelloWorld: () => {},
});

const meetups = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?cs=srgb&dl=pexels-julius-silver-753626.jpg&fm=jpg",
    title: "The Spot",
    address: "latrikunda german",
    description: "That is still the hood",
  },
  {
    id: 2,
    image:
      "https://www.jiomart.com/images/product/600x600/rvjgutuphu/hanish-arts-crafts-scenery-handmade-wall-painting-size-18-x-24-product-images-orvjgutuphu-p590814625-0-202110082007.jpg",
    title: "The Other Spot",
    address: "Cape Point",
    description: "A little taste of suburbia",
  },
];
export const MeetupContextProvider = (props) => {
  const getMeetup = (id) => {
    const meetup = meetups.find((el) => el.id == id);
    return meetup;
  };

  const addMeetup = (meetup) => {
    return meetups.push(meetup);
  };

  const contextValue = { meetups, getMeetup, addMeetup };

  return (
    <MeetupContext.Provider value={contextValue}>
      {props.children}
    </MeetupContext.Provider>
  );
};

export default MeetupContext;
