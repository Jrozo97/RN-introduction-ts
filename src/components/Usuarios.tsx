import { useUsers } from "../hooks/useUsers";
import { User } from "../interfaces/reqRes.interface";

export const Usuarios = () => {
  
    const { listUsers, pageNext, pageBack } = useUsers();

  const renderItem = ({ id, first_name, last_name, email, avatar }: User) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 40, borderRadius: 100 }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{listUsers.map((user) => renderItem(user))}</tbody>
      </table>
      <button className="btn btn-primary" onClick={ pageBack }> Anteriores </button>
        &nbsp;
      <button className="btn btn-primary" onClick={ pageNext }> Siguientes </button>

    </>
  );
};
