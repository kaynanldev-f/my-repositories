import { useState, useCallback, useEffect } from "react";
import clsx from "clsx";
import {
  FaGithub,
  FaPlus,
  FaCircleNotch,
  FaBars,
  FaTrash,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import api from "../../services/api";
import type { RepositoryType } from "../../types/Repositories";

export default function Home() {
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState<RepositoryType[]>(() => {
    const savedRepositories = localStorage.getItem("repos");

    return savedRepositories ? JSON.parse(savedRepositories) : [];
  });
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    localStorage.setItem("repos", JSON.stringify(repositories));
  }, [repositories]);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setNewRepo(e.target.value);
  }
  const handleAddRepository = useCallback(
    (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!newRepo.trim()) return;

      async function addRepository() {
        setLoading(true);
        setErr(false);

        try {
          const response = await api.get(`repos/${newRepo}`);

          const hasRepo = repositories.find(
            (r) => r.name === response.data.full_name,
          );

          if (hasRepo) {
            throw new Error("Repositório já existe na sua lista");
          }

          const data: RepositoryType = {
            name: response.data.full_name,
          };
          console.log(data);
          setRepositories((prev) => [...prev, data]);
        } catch (error) {
          setErr(true);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }

      addRepository();
    },
    [newRepo, repositories],
  );

  function handleRemoveRepository(name: string) {
    const find = repositories.filter((r) => r.name !== name);
    setRepositories(find);
  }
  return (
    <div className="max-w-175 mx-auto my-20  p-4 bg-white rounded-lg shadow-md">
      <div className="flex gap-4 justify-center items-center my-4">
        <FaGithub size={32} className="text-[#0D2636]" />
        <h1 className="text-4xl font-bold ">Meus repositorios</h1>
      </div>

      <form onSubmit={handleAddRepository} className="mt-8 flex gap-4 flex-row">
        <input
          className={clsx(
            `flex-1 border  py-3 px-4 rounded-sm text-base
            ${err ? "border-[#ff0000]" : "border-[#ddd]"}`,
          )}
          type="text"
          placeholder="Adicionar Repositorios"
          value={newRepo}
          onChange={handleInput}
        />
        <button
          className="bg-[#0D2636] text-white border-none rounded-sm px-3 flex items-center justify-center"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <FaCircleNotch size={24} className="animate-spin" />
          ) : (
            <FaPlus size={24} />
          )}
        </button>
      </form>
      <ul className="list-none mt-6">
        {repositories.map((repository) => (
          <li
            key={repository.name}
            className="py-4 flex flex-row justify-between items-center border-b border-[#eee]"
          >
            <span className="flex gap-2 items-center">
              <FaTrash
                size={16}
                className="text-[#0D2636] cursor-pointer"
                onClick={() => handleRemoveRepository(repository.name)}
              />
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                {repository.name}
              </Link>
            </span>
            <FaBars size={24} />
          </li>
        ))}
      </ul>
    </div>
  );
}
