import App from "../App";

export default function ShowProject({ projectState }) {
  return (
    <div>
      {projectState.projects.map((id) => {
        return (
          <tr key={id.id}>
            <td>
              <p>{id.title}</p>
              <p>{id.description}</p>
              <p>{id.dueDate}</p>
            </td>
          </tr>
        );
      })}
    </div>
  );
}
