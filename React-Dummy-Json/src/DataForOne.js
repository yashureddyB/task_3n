export function DataForOne({ details }) {
  return (
    <>
      <div>{details.id}</div>
      <img
        className="profile-img"
        src={details.image}
        alt={`profile img of ${details.fistName} ${details.middleName} ${details.lastName}`}
      />
      <div>{details.firstName}</div>
      <div>{details.lastName}</div>
      <div>{details.gender}</div>
      <div>{details.email}</div>
      <div>{details.username}</div>
      <div>{details.domain}</div>
      <div>{details.ip}</div>
      <div>{details.university}</div>
    </>
  );
}
