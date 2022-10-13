import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
import Card from "../ui/Card";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <Card>
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
          />
        </Card>
      ))}
    </ul>
  );
}

export default MeetupList;
