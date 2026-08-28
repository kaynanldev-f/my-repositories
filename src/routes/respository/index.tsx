import { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams, Link } from "react-router-dom";
import { FaCircleNotch } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import type {
  IssuesType,
  RepositoryDetailsType,
} from "../../types/Repositories";
import clsx from "clsx";
export default function Repository() {
  const [repositorio, setRepositorio] = useState<RepositoryDetailsType>();
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [stateIssue, setStateIssue] = useState("all");
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

      setRepositorio(getRepo.data);
      setIssues(getIssues.data);
      setLoading(false);
    }

    loadingRepo();
  }, [repository]);

  useEffect(() => {
    async function loadPage() {
      setLoading(true);

      if (!repository) {
        return;
      }

      const nomeRepo = decodeURIComponent(repository);

      const getIssue = await api.get(`/repos/${nomeRepo}/issues`, {
        params: {
          state: stateIssue,
          page: page,
          per_page: 5,
        },
      });

      setIssues(getIssue.data);
    }

    loadPage();
  }, [page, repositorio, stateIssue]);

  function handlePage(actionPage: string) {
    actionPage === "back" ? setPage(page - 1) : setPage(page + 1);
  }

  function handleStateIssue(state: string) {
    setStateIssue(state);
    setPage(1);
  }

  if (!repositorio) {
    return <FaCircleNotch size={24} className="animate-spin" />;
  }

  return (
    <div className="max-w-full flex flex-col items-center justify-center py-20">
      <div className="relative rounded-lg bg-[#eee] max-w-[640px] w-full p-10 flex flex-col items-center justify-center">
        <img
          src={repositorio.owner.avatar_url || ""}
          alt={repositorio.description}
          className="rounded-full w-40 h-40"
        />
        <h1 className="text-5xl font-bold text-[#0D2636] mt-6">
          {repositorio.name}
        </h1>
        <p className="text-base text-center mt-4 max-w-3/4 text-[#0D2636]">
          {repositorio.description}
        </p>
        <Link to={"/"} className="absolute top-4 left-4">
          <FaArrowLeft size={16} color="#0D2636" />
        </Link>

        <div className="w-full flex justify-start gap-2 mt-8">
          <button
            className="border-2 border-[#222] text-[#222] text-xs py-1 px-3 rounded-lg hover:opacity-90 transition duration-200 cursor-pointer"
            type="button"
            onClick={() => handleStateIssue("all")}
          >
            All
          </button>
          <button
            className="border-2 border-[#222] text-[#222] text-xs py-1 px-3 rounded-lg hover:opacity-90 transition duration-200 cursor-pointer"
            type="button"
            onClick={() => handleStateIssue("open")}
          >
            Open
          </button>
          <button
            className="border-2 border-[#222] text-[#222] text-xs py-1 px-3 rounded-lg hover:opacity-90 transition duration-200 cursor-pointer"
            type="button"
            onClick={() => handleStateIssue("closed")}
          >
            Close
          </button>
        </div>
        <ul className="mt-2 pt-4 border-t-1 border-[#e0e0e0] list-style-none">
          {issues.map((issue: IssuesType) => (
            <li key={String(issue.id)} className="flex p-4 mt-4">
              <img
                src={issue.user.avatar_url}
                alt={issue.user.login}
                className="w-9 h-9 rounded-full border-2 border-[#0D2636]"
              />

              <div className="flex-1 ml-4">
                <strong className="text-base">
                  <a
                    href={issue.html_url}
                    className="text-decoration-none text-[#222] transition duration-[0.3s] hover:text-[#0071db]"
                  >
                    {issue.title}
                  </a>

                  {issue.labels.map((label) => (
                    <span
                      key={label.id}
                      className="bg-[#222] text-white rounded-sm text-sm font-bold p-1  ml-3"
                    >
                      {label.name}
                    </span>
                  ))}
                </strong>

                <p className="mt-3 text-base text-[#000]">{issue.user.login}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="w-full flex items-center justify-end gap-2">
          <button
            className={clsx(
              `bg-[#222] text-white py-1 px-3 rounded-lg hover:opacity-90 transition duration-200`,
              page < 2 ? "cursor-not-allowed bg-[#808080]" : "cursor-pointer",
            )}
            disabled={page < 2}
            type="button"
            onClick={() => handlePage("back")}
          >
            Voltar
          </button>
          <button
            className="bg-[#222] text-white py-1 px-3 rounded-lg hover:opacity-90 transition duration-200 cursor-pointer"
            type="button"
            onClick={() => handlePage("")}
          >
            Proximo
          </button>
        </div>
      </div>
    </div>
  );
}
