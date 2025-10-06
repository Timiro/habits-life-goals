export default function QuestForm({ onSubmit = () => {}, quest = {} }) {
  return (
    <form onSubmit={onSubmit}>
      <h2>Quest Form</h2>
      <input type="text" name="title" placeholder="Quest title" defaultValue={quest.title || ""} />
      <button type="submit">Save Quest</button>
    </form>
  );
}