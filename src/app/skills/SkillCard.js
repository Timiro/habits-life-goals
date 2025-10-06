export default function SkillCard({ skill }) {
  return (
    <div>
      <h3>Skill Card</h3>
      <p>{skill?.name || "Skill name placeholder"}</p>
    </div>
  );
}