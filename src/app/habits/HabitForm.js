export default function HabitForm({ onSubmit = () => {}, habit = {} }) {
  return (
    <form onSubmit={onSubmit}>
      <h2>Habit Form</h2>
      <input type="text" name="title" placeholder="Habit title" defaultValue={habit.title || ""} />
      <button type="submit">Save Habit</button>
    </form>
  );
}