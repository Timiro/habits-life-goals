export default function QuestCard({ quest }) {
  return (
    <div>
      <h3>Quest Card</h3>
      <p>{quest?.title || "Quest title placeholder"}</p>
    </div>
  );
}