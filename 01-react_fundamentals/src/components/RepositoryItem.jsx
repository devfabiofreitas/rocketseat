export function RepositoryItem(props){
  <li>
    <strong>{props.repository.name}</strong>
    <p>{props.repository.description}</p>
    <a>{props.repository.html_url}</a>
  </li>
}