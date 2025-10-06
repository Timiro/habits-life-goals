export default function SkillForm({ onSubmit = () => {}, skill = {} }) {
  return (
    <form onSubmit={onSubmit}>
      <h2>Skill Form</h2>
      <input type="text" name="name" placeholder="Skill name" defaultValue={skill.name || ""} />
      <button type="submit">Save Skill</button>
    </form>
  );
}