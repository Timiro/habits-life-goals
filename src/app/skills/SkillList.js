export default function SkillList({ skills = [] }) {
  return (
    <div>
      <h2>Skill List</h2>
      {skills.length > 0 ? (
        skills.map((skill) => <div key={skill.id}>{skill.name}</div>)
      ) : (
        <p>No skills yet.</p>
      )}
    </div>
  );
}