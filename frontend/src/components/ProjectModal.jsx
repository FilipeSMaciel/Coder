import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import "react-responsive-modal/styles.css";

export default function ProjectModal({ setOpen, onAddProject }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmitProject = (data) => {
    const newProject = {
      id: Date.now(), // Gerar ID único com base no timestamp
      name: data.name,
      image: data.image,
      description: data.description,
      requisites: data.requisites,
      status: data.status,
      companyId: parseInt(data.companyId, 10), // Converter para número
    };

    onAddProject(newProject); // Callback para adicionar o projeto
    reset();
    setOpen(false); // Fechar o modal após o envio
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4">Adicionar Projeto</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmitProject)}>
        <input
          type="text"
          placeholder="Nome do Projeto"
          className="border border-gray-300 rounded-md p-2"
          required
          {...register("name")}
        />
        <input
          type="url"
          placeholder="URL da Imagem"
          className="border border-gray-300 rounded-md p-2"
          required
          {...register("image")}
        />
        <textarea
          placeholder="Descrição do Projeto"
          className="border border-gray-300 rounded-md p-2"
          required
          {...register("description")}
        ></textarea>
        <textarea
          placeholder="Requisitos (separados por vírgula)"
          className="border border-gray-300 rounded-md p-2"
          required
          {...register("requisites")}
        ></textarea>
        <select
          className="border border-gray-300 rounded-md p-2"
          required
          {...register("status")}
        >
          <option value="">Selecione o Status</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Concluído">Concluído</option>
          <option value="Pausado">Pausado</option>
        </select>
        <input
          type="number"
          placeholder="ID da Empresa"
          className="border border-gray-300 rounded-md p-2"
          required
          {...register("companyId")}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
        >
          Adicionar Projeto
        </button>
      </form>
    </div>
  );
}

ProjectModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  onAddProject: PropTypes.func.isRequired,
};
