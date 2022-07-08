import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';

const [repositories, setRepositories] = useState([]);

useEffect(fetch("https://api.github.com/orgs/rocketseat/repos")
            .then(response => response.json())
            .then(data => setRepositories(data)), [])

export function RepositoryList(){
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
        
        <ul>
          {repositories.map( repository => <RepositoryItem key = {repository.name} repository={repository} />)}
        </ul>
    </section>
  )
}