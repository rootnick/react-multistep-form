export function UserForm() {
  return (
    <>
      <label>Fist Name</label>
      <input autoFocus required type="text" />
      <label>Last Name</label>
      <input required type="text" />
      <label>Age</label>
      <input required type="number" min={1} />
    </>
  );
}
