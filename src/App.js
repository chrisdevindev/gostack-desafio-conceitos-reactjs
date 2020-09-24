import React, { useEffect, useState } from "react";
import api from "services/api"

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    api.get("repositories").then(response => {
      setRepositories(response.data)
    })
  }, [])



  async function handleAddRepository() {
    const repo = await api.post("repositories", {
      title: 'ccastro01',
      url: 'https://github.com/ccastro01',
      techs: ["Node.js", "React.js", "React-Native"]
    })

    setRepositories( [...repositories, repo.data] )
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => (
          <li key={repository.id}>
            {repository.title}
            <button onClick={() => handleRemoveRepository(1)}>
              Remover
          </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
