import { useContext, Fragment } from "react";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import MeetupContext from "../../context";
import { useRouter } from "next/router";

const NewMeetup = () => {
  const router = useRouter();
  // const meetupCtx = useContext(MeetupContext);
  const addMeetupHandler = async (meetup) => {
    const response = await fetch("/api/new-meetup", {
      body: JSON.stringify(meetup),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    console.log(data);

    // meetupCtx.addMeetup(meetup);
    router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>Add New Meetup</title>
        <meta name="description" content="Add a new meetup spot!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
};

export default NewMeetup;
