import { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

export default function Repository({ match }: string) {
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const { repository } = useParams();
  useEffect(() => {
    async function loadingRepo() {
      setLoading(true);

      if (!repository) {
        return;
      }
      const nomeRepo = decodeURIComponent(repository);

      const [getRepo, getIssues] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: "open",
            per_page: 5,
          },
        }),
      ]);

      console.log(getRepo.data);
      console.log(getIssues.data);
      setRepositorio(getRepo.data);
      setIssues(getIssues.data);
      setLoading(false);
    }

    loadingRepo();
  }, [repository]);
  return (
    <div>
      <h1>Welcome to the Repository Page</h1>
    </div>
  );
}
