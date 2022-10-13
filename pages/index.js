import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import MeetupContext from "../context";

//added a comment to test
const HomePage = (props) => {
  //   const meetupCtx = useContext(MeetupContext);
  //   const meetups = meetupCtx.meetups;
  return (
    <Fragment>
      <Head>
        <title>NextJs Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of cool meetup spots, created with NextJS!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

export async function getStaticProps() {
  try {
    const client = await MongoClient.connect(
      "mongodb+srv://ssillah:Genius10@cluster0.nazgy.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    const collection = db.collection("meetups");

    const meetups = await collection.find().toArray();
    client.close();
    return {
      props: {
        meetups: meetups.map((meetup) => ({
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          id: meetup._id.toString(),
        })),
      },
      revalidate: 1,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        meetups: [
          {
            id: 1,
            image:
              "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?cs=srgb&dl=pexels-julius-silver-753626.jpg&fm=jpg",
            title: "The Spot",
            address: "latrikunda german",
            description: "That is still the hood",
          },
        ],
      },
      revalidate: 1,
    };
  }
}

export default HomePage;
