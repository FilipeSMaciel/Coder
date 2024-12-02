import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import "./ProjectModal.css";

export default function ProjectModal({ setOpen, onAddProject }) {
  const { register, handleSubmit, reset } = useForm();
  const [imageUrl, setImageUrl] = useState("");

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
    setImageUrl(""); // Limpa a URL da imagem
    setOpen(false); // Fechar o modal após o envio
  };

  return (
    <div className="p-1 sm:h-[85vh]">

      <h1 className="text-[7vw] sm:text-[2.4vw] text-center text-verde_principal font-bold mb-4">
        &lt; Adicionar Projeto /&gt;
      </h1>
    <div className="w-[90vw] flex justify-around max-w-md sm:w-[75vw] sm:h-[70vh] sm:max-w-[100vw] p-6 rounded-md shadow-md font-jetbrains">
      <form
        className="flex flex-col gap-4 items-center"
        onSubmit={handleSubmit(onSubmitProject)}
        >
        <input
          type="text"
          placeholder="Nome do Projeto"
          className="max-w-[40vw] sm:w-[40vw] border border-verde_principal rounded-md p-2 bg-bg_botao-login z-10 text-[3.7vw] sm:text-[1.3vw]"
          required
          {...register("name")}
          />
        
        <input
          type="url"
          placeholder="URL da Imagem"
          className="max-w-[40vw] sm:w-[40vw] border border-verde_principal rounded-md p-2 bg-bg_botao-login z-10 text-[3.7vw] sm:text-[1.3vw]"
          required
          {...register("image")}
          onChange={(e) => setImageUrl(e.target.value)} // Atualiza o estado da URL
          />
        
        <textarea
          placeholder="Descrição do Projeto"
          className="max-w-[40vw] sm:w-[40vw] border border-verde_principal bg-bg_botao-login z-10 rounded-md p-2 text-[3.7vw] sm:text-[1.3vw]"
          required
          {...register("description")}
          ></textarea>
        <textarea
          placeholder="Requisitos (separados por vírgula)"
          className="max-w-[40vw] sm:w-[40vw] border border-verde_principal bg-bg_botao-login z-10 rounded-md p-2 text-[3.7vw] sm:text-[1.3vw]"
          required
          {...register("requisites")}
          ></textarea>
        <select
          className="max-w-[40vw] sm:w-[40vw] border text-white/60 border-verde_principal bg-bg_botao-login z-10 rounded-md p-2 text-[3.7vw] sm:text-[1.3vw]"
          required
          {...register("status")}
          >
          <option className="bg-bg_botao-login" value="">
            Selecione o Status
          </option>
          <option className="bg-bg_botao-login" value="Em andamento">
            Em andamento
          </option>
          <option className="bg-bg_botao-login" value="Concluído">
            Concluído
          </option>
          <option className="bg-bg_botao-login" value="Pausado">
            Pausado
          </option>
        </select>
        <input
          type="number"
          placeholder="ID da Empresa"
          className="max-w-[40vw] sm:w-[40vw] border border-verde_principal text-white bg-bg_botao-login z-10 rounded-md p-2 text-[3.7vw] sm:text-[1.3vw]"
          required
          {...register("companyId")}
          />
        <button
          type="submit"
          className="bg-verde_principal text-black  rounded-md px-4 py-2 hover:bg-blue-600"
          >
          Adicionar Projeto
        </button>
      </form>
      {imageUrl && (
        <div className="image-preview hidden sm:flex flex-col items-center gap-10">
            <h3 className="text-verde_principal">Prévia da imagem escolhida</h3>
            <img
              src={imageUrl}
              alt="Prévia do projeto"
              className="max-w-[10vw] sm:max-w-[15vw] rounded-md border border-gray-300"
              onError={(e) => (e.target.style.display = "none")} // Esconde se a URL for inválida
              />
          </div>
        )}
    </div>
</div>
  );
}

ProjectModal.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  onAddProject: PropTypes.func.isRequired,
};
