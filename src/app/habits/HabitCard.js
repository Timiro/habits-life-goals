export default function HabitCard({ habit }) {
  return (
    <div>
      <h3>Habit Card</h3>
      <p>{habit?.title || "Habit title placeholder"}</p>
    </div>
  );
}