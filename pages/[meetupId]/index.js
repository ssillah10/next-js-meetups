import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

// const getCollection = async () => {
//   const client = await MongoClient.connect(
//     "mongodb+srv://ssillah:Genius10@cluster0.nazgy.mongodb.net/meetups?retryWrites=true&w=majority"
//   );
//   const db = client.db();
//   const meetupsCollection = db.collection("meetups");

//   return { client, meetupsCollection };
// };

function MeetupDetail1(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupDetail.title}</title>
        <meta name="description" content={props.meetupDetail.description} />
      </Head>
      <MeetupDetail
        image={props.meetupDetail.image}
        title={props.meetupDetail.title}
        address={props.meetupDetail.address}
        description={props.meetupDetail.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  // const { client, meetupsCollection } = getCollection();
  const client = await MongoClient.connect(
    "mongodb+srv://ssillah:Genius10@cluster0.nazgy.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  return {
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  //   const meetup = getCollection("findOne", ObjectId(meetupId));

  const client = await MongoClient.connect(
    "mongodb+srv://ssillah:Genius10@cluster0.nazgy.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

  return {
    props: {
      meetupDetail: {
        id: meetup._id.toString(),
        image: meetup.image,
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
}

export default MeetupDetail1;
