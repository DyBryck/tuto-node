import * as userService from "../services/userService.js";
import { handleRequest } from "../utils/controllerUtils.js";

export const listUsers = async (req, res) =>
  handleRequest(req, res, async () => {
    return await userService.listUsers();
  });

export const createUser = async (req, res) =>
  handleRequest(req, res, async (body) => {
    const userCreated = await userService.createUser(body);
    return {
      message: "Utilisateur crée:",
      user: userCreated,
    };
  });

export const getUserById = async (req, res, id) =>
  handleRequest(req, res, async () => {
    const userFound = await userService.getUserById(id);
    return {
      message: "Utilisateur trouvé:",
      user: userFound,
    };
  });

export const getUserWithArticles = async (req, res, id) =>
  handleRequest(req, res, async () => {
    const userWithArticlesFound = await userService.getUserWithArticles(id);
    return {
      message: "Utilisateur et ses articles trouvé:",
      user: userWithArticlesFound,
    };
  });

export const updateUser = async (req, res, id) =>
  handleRequest(req, res, async (body) => {
    const userUpdated = await userService.updateUser(id, body);
    return {
      message: "Utilisateur modifié:",
      user: userUpdated,
    };
  });

export const deleteUser = async (req, res, id) =>
  handleRequest(req, res, async () => {
    const userDeleted = await userService.deleteUser(id);
    return {
      message: "Utilisateur supprimé:",
      user: userDeleted,
    };
  });
