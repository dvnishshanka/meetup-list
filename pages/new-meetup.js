import NewMeetupForm from "./../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = (enteredMeetupDetails) => {
    console.log(enteredMeetupDetails);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};
export default NewMeetupPage;
