export default function HabitList({ habits = [] }) {
  return (
    <div>
      <h2>Habit List</h2>
      {habits.length > 0 ? (
        habits.map((habit) => <div key={habit.id}>{habit.title}</div>)
      ) : (
        <p>No habits yet.</p>
      )}
    </div>
  );
}