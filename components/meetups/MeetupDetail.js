import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <div className={classes.description}>
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
    </section>
  );
};
export default MeetupDetail;
