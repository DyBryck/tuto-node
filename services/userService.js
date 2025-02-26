import { userRepository } from "../repositories/userRepository.js";
import { validateUser } from "../utils/errors/validations/userValidation.js";

export const listUsers = async () => {
  return await userRepository.list();
};

export const createUser = async (userData) => {
  validateUser(userData);
  const newUser = await userRepository.create(userData);
  return newUser;
};

export const getUserById = async (id) => {
  const user = await userRepository.getById(id);
  if (!user) {
    throw { status: 404, message: "Utilisateur non trouvé" };
  }
  return user;
};

export const getUserWithArticles = async (id) => {
  const user = await userRepository.getUserWithArticles(id);
  if (!user) {
    throw { status: 404, message: "Utilisateur non trouvé" };
  }
  return user;
};

export const updateUser = async (id, updatedData) => {
  if (!updatedData.name && !updatedData.email) {
    throw { status: 400, message: "Aucun champ à mettre à jour" };
  }
  const updatedUser = await userRepository.update(id, updatedData);
  if (!updatedUser) {
    throw { status: 404, message: "Utilisateur non trouvé" };
  }
  return updatedUser;
};

export const deleteUser = async (id) => {
  const user = await userRepository.getById(id);
  if (!user) {
    throw { status: 404, message: "Utilisateur non trouvé" };
  }
  await userRepository.delete(id);
  return user;
};
