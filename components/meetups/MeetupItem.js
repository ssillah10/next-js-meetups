import classes from "./MeetupItem.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function MeetupItem(props) {
  const router = useRouter();
  const showDetails = router.query.meetupId;
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        {showDetails && <p>{props.description}</p>}
      </div>
      {!showDetails && (
        <div className={classes.actions}>
          <Link href={`/${props.id}`}>
            <button>Show Details</button>
          </Link>
        </div>
      )}
    </li>
  );
}

export default MeetupItem;
