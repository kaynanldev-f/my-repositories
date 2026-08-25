import { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams, Link } from "react-router-dom";
import { FaCircleNotch } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import type { RepositoryDetailsType } from "../../types/Repositories";
export default function Repository() {
  const [repositorio, setRepositorio] = useState<RepositoryDetailsType>();
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
      </div>
    </div>
  );
}
