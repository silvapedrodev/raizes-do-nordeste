export type MockUser = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  password: string;
  phone: string;
  birthDate: string;
};

const USERS_KEY = "mock_users";
const TOKEN_KEY = "mock_token";

const getUsers = (): MockUser[] => {
  if (typeof window === "undefined") {
    return [];
  }

  const users = localStorage.getItem(USERS_KEY);

  if (!users) {
    return [];
  }

  return JSON.parse(users);
};

export const findUserByIdentifier = (
  identifier: string
): MockUser | null => {
  const users = getUsers();

  if (identifier.includes("@")) {
    const email = identifier.trim().toLowerCase();

    return (
      users.find(
        user => user.email.toLowerCase() === email
      ) ?? null
    );
  }

  const cpf = identifier.replace(/\D/g, "");

  return (
    users.find(
      user => user.cpf?.replace(/\D/g, "") === cpf
    ) ?? null
  );
};

export const signin = (
  identifier: string,
  password: string
) => {
  const user = findUserByIdentifier(identifier);

  if (!user) {
    return {
      error: "Usuário não encontrado",
      token: null,
    };
  }

  if (user.password !== password) {
    return {
      error: "Senha incorreta",
      token: null,
    };
  }

  const token = `mock_token_${user.id}_${crypto.randomUUID()}`;

  return {
    error: null,
    token,
  };
};

export const createMockUser = (
  data: Omit<MockUser, "id">
): MockUser => {
  const users = getUsers();

  const user: MockUser = {
    id: crypto.randomUUID(),
    ...data,
  };

  users.push(user);

  localStorage.setItem(
    USERS_KEY,
    JSON.stringify(users)
  );

  return user;
};

export const getUserFirstName = (
  token: string
): string | null => {
  const userId = token.split("_")[2];

  if (!userId) {
    return null;
  }

  const users = getUsers();

  const user = users.find(
    user => user.id === userId
  );

  if (!user) {
    return null;
  }

  return user.name.trim().split(/\s+/)[0];
};

export const setAuthToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getAuthToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeAuthToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
