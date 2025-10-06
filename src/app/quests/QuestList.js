export default function QuestList({ quests = [] }) {
  return (
    <div>
      <h2>Quest List</h2>
      {quests.length > 0 ? (
        quests.map((quest) => <div key={quest.id}>{quest.title}</div>)
      ) : (
        <p>No quests yet.</p>
      )}
    </div>
  );
}