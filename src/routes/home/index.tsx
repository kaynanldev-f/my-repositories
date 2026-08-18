import { FaGithub, FaPlus } from "react-icons/fa";

export default function Home() {
  return (
    <div className="max-w-[700px] mx-auto my-20  p-4 bg-white rounded-lg shadow-md">
      <div className="flex gap-4 justify-center items-center my-4">
        <FaGithub size={32} className="text-[#0D2636]" />
        <h1 className="text-4xl font-bold ">Meus repositorios</h1>
      </div>

      <form className="mt-8 flex gap-4 flex-row">
        <input
          className="flex-1 border border-[#ddd] py-3 px-4 rounded-sm text-base"
          type="text"
          placeholder="Adicionar Repositorios"
        />
        <button
          className="bg-[#0D2636] text-white border-none rounded-sm px-3 flex items-center justify-center"
          type="submit"
        >
          <FaPlus size={24} />
        </button>
      </form>
    </div>
  );
}
